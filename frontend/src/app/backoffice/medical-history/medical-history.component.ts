import { Component, OnInit, ViewChild } from '@angular/core';
import { buildPagination, NUMBER_ROWS } from '../../constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-medical-history',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css'
})
export class MedicalHistoryComponent implements OnInit {

  constructor(
    private Main: MainService
  ) {}

  @ViewChild('medicalHistoryModal', {static: false}) medicalHistoryModal?: ModalDirective;
  
  filter: any = {
    pagination: {
      page: 1,
      limit: 20
    }
  };

  numberRows: any[] = NUMBER_ROWS;
  newMedicalHistory: any;
  patientFound: any;
  results: any[] = [];
  pages: number[] = [];
  hasMedicalHistory: boolean = false;
  ngOnInit(): void {
      
  }

  async search() {
    this.filter.searching = true;
    this.results = [];
    this.filter.searched = false;
    let body: any = {};
    if (!this.filter.text) {
      body.where = {};
    } else {
      body.where = {
        $or: [
          {
            code: {$regex: this.filter.text, $options: 'i'}
          },
          {
            paternalSurname: {$regex: this.filter.text, $options: 'i'}
          },
          {
            maternalSurname: {$regex: this.filter.text, $options: 'i'}
          },
          {
            firstName: {$regex: this.filter.text, $options: 'i'}
          }
        ]
      };
    }

    // where: {
    //   $text: {$search: this.filter.text}
    // }
    let result: any = await this.Main.getPatientQuantity(body).toPromise();
    console.log(result);
    this.filter.totalRows = result.quantity;
    if (this.filter.totalRows > 0) {
      this.filter.pagination.page = 1;
      this.pages = buildPagination(this.filter.totalRows, this.filter.pagination.limit);
      this.getPatients();
    } else {
      this.filter.searching = false;
      this.filter.searched = true;
      this.results = [];
    }
  }

  async getPatients() {
    this.results = [];
    let body: any = {}
    if (!this.filter.text) {
      body.where = {};
    } else {
      body = {
        where: {
        $or: [
            {
              code: {$regex: this.filter.text, $options: 'i'}
            },
            {
              paternalSurname: {$regex: this.filter.text, $options: 'i'}
            },
            {
              maternalSurname: {$regex: this.filter.text, $options: 'i'}
            },
            {
              firstName: {$regex: this.filter.text, $options: 'i'}
            }
          ]
        }, 
      }
    }
    body.pagination = this.filter.pagination;
    let result: any = await this.Main.getPatients(body).toPromise();
    this.filter.searching = false;
    this.filter.searched = true;
    this.results = result;
  }

  toggleMedicalHistory(medicalHistory?: any, documentNumber?: any) {
    if (this.medicalHistoryModal?.isShown) {
      this.medicalHistoryModal.hide();
    } else {
      this.patientFound = undefined;
      this.medicalHistoryModal!.config.ignoreBackdropClick = true;
      this.medicalHistoryModal!.config.keyboard = false;
      this.newMedicalHistory = {};
      if (medicalHistory) {
        this.hasMedicalHistory = true;
        this.newMedicalHistory = JSON.parse(JSON.stringify(medicalHistory));
        if (this.newMedicalHistory.patientSearch) {
          this.searchPatientByCode();
        }
        this.newMedicalHistory.editing = true;
      }
      if (documentNumber) {
        this.newMedicalHistory.patientSearch = documentNumber;
        this.searchPatientByCode();
      }
      this.medicalHistoryModal?.show();
    }
  }

  async searchPatientByCode() {
    this.newMedicalHistory.patient = undefined;
    this.patientFound = undefined;
    let result: any = await this.Main.getPatients({where: {code: this.newMedicalHistory.patientSearch}}).toPromise();
    console.log(result);
    switch (result.length) {
      case 0:
        Swal.fire({
          text: 'No existe ninguna persona asociada al Número de Documento',
          icon: 'warning'
        });
        this.newMedicalHistory.error = true;
        break;
      case 1: 
        let patientFound: any = result[0];
        let verifyExistMedicalHistory: any = await this.Main.getMedicalHistory({where: {patient: patientFound._id}}).toPromise();
        console.log(verifyExistMedicalHistory);
        if (!verifyExistMedicalHistory.length || this.newMedicalHistory.editing) {
          this.newMedicalHistory.patient = patientFound._id;
          this.newMedicalHistory.code = patientFound.code;
          this.patientFound = patientFound;
          this.newMedicalHistory.error = false;
        } else {
          Swal.fire({
            text: 'Esta persona ya tiene Historial Médico.',
            icon: 'warning'
          });
          this.newMedicalHistory.error = true;
        }
        break;
      default:
        Swal.fire({
          text: 'Esta Documento de Identidad tiene mas de 1 persona asociada. Revisar en Personas.',
          icon: 'warning'
        });
        this.newMedicalHistory.error = true;
        break;
    }
    
  }

  
  saveMedicalHistory() {
    Swal.fire({
      title: '¿Estás seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let result: any;
        if (this.newMedicalHistory.editing) {
          result = await this.Main.updateMedicalHistory(this.newMedicalHistory._id, {updated: this.newMedicalHistory}).toPromise();
        } else {
          result = await this.Main.setMedicalHistory({news: [this.newMedicalHistory]}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error con la vacuna',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se realizo la operación correctamente',
          icon: 'success'
        });
        this.toggleMedicalHistory();
      }
    })
  }
  
  deleteMedicalHistory(item: any) {
    Swal.fire({
      title: '¿Estás seguro de eliminar el item?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let result: any = await this.Main.deleteMedicalHistory(item._id).toPromise();
        if (!result) {
          Swal.fire({
            text: 'Hubo un error al eliminar la vacuna',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se realizo la operación correctamente',
          icon: 'success'
        });
        this.search();
      }
    });
  }

  resetPatientSearch() {
    this.newMedicalHistory.patient = undefined;
    this.patientFound = undefined;
    this.newMedicalHistory.code = undefined;
    this.newMedicalHistory.patientSearch = undefined;
  }


  async verifyMedicalHistory(patient: any) {
    console.log(patient);
    let result: any = await this.Main.getMedicalHistory({where: {patient: patient._id}}).toPromise();
    console.log(result);
    if (result.length) {
      this.hasMedicalHistory = true;
      result[0].patientSearch = result[0].code;
      this.toggleMedicalHistory(result[0]);
    } else {
      this.hasMedicalHistory = false;
      this.toggleMedicalHistory(null, patient.code);
    }
  }

  changePage(page: number) {
    this.filter.pagination.page = page;
    this.getPatients();
  }

}
