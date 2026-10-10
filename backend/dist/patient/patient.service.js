"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const moment = require("moment");
const mongoose_1 = require("mongoose");
const XLSX = require("xlsx");
const XL = require("excel4node");
const path = require("path");
let PatientService = class PatientService {
    constructor(Patient, MedicalHistory, MedicalStaff) {
        this.Patient = Patient;
        this.MedicalHistory = MedicalHistory;
        this.MedicalStaff = MedicalStaff;
    }
    async create(body) {
        let result = await this.Patient.insertMany(body.news);
        return result;
    }
    async getQuantity(where) {
        let result = await this.Patient.find(where).countDocuments();
        return {
            quantity: result
        };
    }
    async findAll(where, pagination) {
        pagination = pagination || { page: 1, limit: 10 };
        let result = await this.Patient.find(where, {}, { skip: (pagination.page - 1) * pagination.limit, limit: pagination.limit }).populate('serviceDeliveryInstitution').populate('healthNetwork');
        return result;
    }
    async export(where) {
        let result = await this.Patient.find(where);
        if (result.length) {
            let wb = new XL.Workbook();
            let ws = wb.addWorksheet('RESULTADO');
            ws.cell(1, 1).number(100);
            let filepath = '/home/pkador666/tmp_files/excel/';
            let filename = path.join(filepath, `${moment().unix()}.xlsx`);
            wb.write(filename);
            return { existsData: true, filename: filename };
        }
        else {
            return { existsData: false };
        }
    }
    excelDateToJSDate(serial) {
        var utc_days = Math.floor(serial - 25569);
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
    async migrate(file) {
        console.log(file);
        let jsonOpts = {
            header: 1,
            defval: '',
            blankrows: true,
            raw: false,
            dateNF: 'd"/"m"/"yyyy'
        };
        let workbook = await XLSX.readFile(file.path, jsonOpts);
        let rows = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        let patients = [];
        let prefixDiagnotics = [1, 2, 3, 4, 5, 6, 7];
        let medicalStaffs = [];
        let medicalHistories = [];
        for (let index = 0; index < rows.length; index++) {
            let r = rows[index];
            let medicalStaffFound = medicalStaffs.find((ms) => ms.code === r[`Docu `]);
            if (!medicalStaffFound) {
                let newMedicalStaff = {
                    code: r[`Docu `],
                    firstName: r[`Apell y Nomb. Pers. Salud`],
                    lastName: r[`Apell y Nomb. Pers. Salud`],
                    profession: r[`Profesion`],
                    workingCondition: r[`Cond. Lab.`],
                    email: `${r[`Docu `]}${moment().unix()}@gmail.com`,
                    ups: r[`UPS`]
                };
                let resultMedicalStaff = await this.MedicalStaff.create(newMedicalStaff);
                newMedicalStaff._id = resultMedicalStaff._id;
                medicalStaffs.push(newMedicalStaff);
            }
            let patiendFound = patients.find((p) => p.code === r['Nro. Docu']);
            if (!patiendFound) {
                let newPatient = {
                    code: r['Nro. Docu'] || moment().unix(),
                    paternalSurname: r['Apell Pater Paciente'],
                    maternalSurname: r['Apell Mater Paciente'],
                    firstName: r['Nombres PacienteNac.'],
                    dateOfBirth: moment(this.excelDateToJSDate(r['Fech.Nac.'])).add(1, 'day'),
                    gender: r[`Sexo`],
                    email: `${r['Nro. Docu'] || moment().unix()}@gmail.com`,
                    healthNetwork: r[`MICRO`],
                    serviceDeliveryInstitution: r[`IPRESS`]
                };
                patients.push(newPatient);
                let resultOne = await this.Patient.create(newPatient);
                medicalHistories.push({
                    code: r[`HCL.`],
                    patientCode: r['Nro. Docu'],
                    patient: resultOne._id,
                    details: [],
                    observation: 'MIGRACIÓN INICIAL'
                });
            }
            let medicalHistoryFound = medicalHistories.find((mh) => mh.patientCode === r['Nro. Docu']);
            if (medicalHistoryFound) {
                prefixDiagnotics.map((pd) => {
                    let detailFound = medicalHistoryFound.details.find((d) => d.type === r[`TipDx${pd}`]);
                    if (r[`TipDx${pd}`]) {
                        let medicalStaffFound = medicalStaffs.find((s) => s.code === r[`Docu `]) || {};
                        medicalHistoryFound.details.push({
                            patientCode: r['Nro. Docu'],
                            diagnosticNumber: pd,
                            type: r[`TipDx${pd}`],
                            activity: r[`DxActi${pd}`],
                            laboratory: r[`lab${pd}`],
                            medicalStaff: medicalStaffFound._id || 'SIN MEDICO',
                            attentionDate: moment(this.excelDateToJSDate(r[`Fech.Aten`])).add(1, 'day').format('DD/MM/YYYY'),
                        });
                    }
                });
            }
        }
        for (let index = 0; index < medicalHistories.length; index++) {
            const m = medicalHistories[index];
            let resultOne = await this.MedicalHistory.create(m);
        }
        return { status: true, message: `Migración completa: ${patients.length} Pacientes revisados, ${medicalHistories.length} Historias Clinicas Revisadas` };
    }
    async findOne(id) {
        let result = await this.Patient.findOne({ _id: id });
        return result;
    }
    async update(id, updated) {
        let result = await this.Patient.updateOne({ _id: id }, updated);
        return result;
    }
    async remove(id) {
        let result = await this.Patient.deleteOne({ _id: id });
        return result;
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PATIENT_MODEL')),
    __param(1, (0, common_1.Inject)('MEDICAL_HISTORY_MODEL')),
    __param(2, (0, common_1.Inject)('MEDICAL_STAFF_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], PatientService);
//# sourceMappingURL=patient.service.js.map