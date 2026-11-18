import { Inject, Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { Model } from 'mongoose';
import * as XLSX from 'xlsx';
import * as XL from 'excel4node';
import * as path from 'path';

@Injectable()
export class PatientService {
  constructor(
    @Inject('PATIENT_MODEL') private Patient: Model<any>, 
    @Inject('MEDICAL_HISTORY_MODEL') private MedicalHistory: Model<any>, 
    @Inject('MEDICAL_STAFF_MODEL') private MedicalStaff: Model<any>, 
  ) {}
  async create(body: any) {
    let result: any = await this.Patient.insertMany(body.news);
    return result;
  }

  async getQuantity(where: any) {
    let result: any = await this.Patient.find(where).countDocuments();
    return {
      quantity: result
    }
  }

  async findAll(where: any, pagination?: any) {
    pagination = pagination || {page: 1, limit: 10};
    let result: any = await this.Patient.find(where, {}, {skip: (pagination.page - 1) * pagination.limit, limit: pagination.limit}).populate('serviceDeliveryInstitution').populate('healthNetwork');
    return result;
  }

  async export(where: any) {
    let result: any = await this.Patient.find(where);

    if (result.length) {

      let wb = new XL.Workbook();
      let ws = wb.addWorksheet('RESULTADO');
      
      ws.cell(1, 1).number(100);
      let filepath = '/home/pkador666/tmp_files/excel/';
      let filename = path.join(filepath,`${moment().unix()}.xlsx`);
      wb.write(filename);

      return {existsData: true, filename: filename};
    } else {
      return {existsData: false};
    }

  }

  excelDateToJSDate(serial) {
    var utc_days  = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
 
    var fractional_day = serial - Math.floor(serial) + 0.0000001;
 
    var total_seconds = Math.floor(86400 * fractional_day);
 
    var seconds = total_seconds % 60;
 
    total_seconds -= seconds;
 
    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
 
    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
  }

  async migrate(file: any) {
    console.log(file);

    let jsonOpts = {
      header: 1,
      defval: '',
      blankrows: true,
      raw: false,
      dateNF: 'd"/"m"/"yyyy' // <--- need dateNF in sheet_to_json options (note the escape chars)
    }

    let workbook: any = await XLSX.readFile(file.path, jsonOpts);
    let rows: any = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    
    let patients: any[] = [];
    let prefixDiagnotics: number[] = [1,2,3,4,5,6,7];
    let medicalStaffs: any[] = [];
    let medicalHistories: any[] = [];
    for (let index = 0; index < rows.length; index++) {
      let r = rows[index];
      let medicalStaffFound: any = medicalStaffs.find((ms: any) => ms.code === r[`Docu `]);
      if (!medicalStaffFound) {
        let newMedicalStaff: any = {
          code: r[`Docu `],
          firstName: r[`Apell y Nomb. Pers. Salud`],
          lastName: r[`Apell y Nomb. Pers. Salud`],
          profession: r[`Profesion`],
          workingCondition: r[`Cond. Lab.`],
          email: `${r[`Docu `]}${moment().unix()}@gmail.com`,
          ups: r[`UPS`]
        };
        let resultMedicalStaff: any = await this.MedicalStaff.create(newMedicalStaff);
        newMedicalStaff._id = resultMedicalStaff._id;
        medicalStaffs.push(newMedicalStaff);
      }


      let patiendFound: any = patients.find((p: any) => p.code === r['Nro. Docu']);
      if (!patiendFound) {
        // Creamos el paciente
        let newPatient: any = {
          code: r['Nro. Docu'] || moment().unix(),
          paternalSurname: r['Apell Pater Paciente'],
          maternalSurname: r['Apell Mater Paciente'],
          firstName: r['Nombres PacienteNac.'],
          dateOfBirth: moment(this.excelDateToJSDate(r['Fech.Nac.'])).add(1,'day'),
          gender: r[`Sexo`],
          email: `${r['Nro. Docu'] || moment().unix()}@gmail.com`,
          healthNetwork: r[`MICRO`],
          serviceDeliveryInstitution: r[`IPRESS`]
        };
        patients.push(newPatient);

        let resultOne: any = await this.Patient.create(newPatient)

        // creamos la historia clinica
        medicalHistories.push({
          code: r[`HCL.`],
          patientCode: r['Nro. Docu'],
          patient: resultOne._id,
          details: [],
          observation: 'MIGRACIÓN INICIAL'
        })

      }
      let medicalHistoryFound: any = medicalHistories.find((mh: any) => mh.patientCode === r['Nro. Docu']);
      if (medicalHistoryFound) {
        prefixDiagnotics.map((pd: any) => {
          let detailFound: any = medicalHistoryFound.details.find((d: any) => d.type === r[`TipDx${pd}`]);
          if (r[`TipDx${pd}`]) {
            let medicalStaffFound = medicalStaffs.find((s: any) => s.code === r[`Docu `]) || {};
            medicalHistoryFound.details.push({
              patientCode: r['Nro. Docu'],
              diagnosticNumber: pd,
              type: r[`TipDx${pd}`],
              activity: r[`DxActi${pd}`],
              laboratory: r[`lab${pd}`],
              medicalStaff: medicalStaffFound._id || 'SIN MEDICO',
              attentionDate: moment(this.excelDateToJSDate(r[`Fech.Aten`])).add(1,'day').format('DD/MM/YYYY'),
            })
          }
        })
      }
      
    }
    
    for (let index = 0; index < medicalHistories.length; index++) {
      const m = medicalHistories[index];
      let resultOne: any = await this.MedicalHistory.create(m);
    }
    return {status: true, message: `Migración completa: ${patients.length} Pacientes revisados, ${medicalHistories.length} Historias Clinicas Revisadas`};
  }

  async findOne(id: any) {
    let result: any = await this.Patient.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.Patient.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.Patient.deleteOne({_id: id});
    return result;
  }
}
