import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { buildPagination, NUMBER_ROWS } from '../../constants';
import { MainService } from '../../services/main.service';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {

  constructor(
    private Main: MainService
  ) {
    
  }
  
  @ViewChild('patientModal', {static: false}) patientModal?: ModalDirective;

  filter: any = {
    pagination: {
      page: 1,
      limit: 20
    }
  }

  pages: number[] = [];
  results: any[] = [];
  numberRows: number[] = NUMBER_ROWS;
  newPatient: any;
  healthNetworks: any[] = [];
  serviceDeliveryInstitutions: any[] = [];
  ngOnInit(): void {
    this.getHealthNetworks();
    this.getServiceDeliveryInstitutions();
  }

  async getHealthNetworks() {
    let result: any = await this.Main.getHealthNetworks({}).toPromise();
    this.healthNetworks = result;
  }

  async getServiceDeliveryInstitutions() {
    let result: any = await this.Main.getServiceDeliveryInstitutions({}).toPromise();
    this.serviceDeliveryInstitutions = result;
  }

  async search() {
    this.filter.searching = true;
    this.results = [];
    this.filter.searched = false;
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
        }
      };
    }
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
        pagination: this.filter.pagination
      }
    }
    let result: any = await this.Main.getPatients(body).toPromise();
    this.filter.searching = false;
    this.filter.searched = true;
    this.results = result;
  }

  changePage(page: number) {
    this.filter.pagination.page = page;
    this.getPatients();
  }
  
  togglePatient(patient?: any) {
    if (this.patientModal?.isShown) {
      this.patientModal.hide();
    } else {
      this.patientModal!.config.ignoreBackdropClick = true;
      this.patientModal!.config.keyboard = false;
      this.newPatient = {};
      if (patient) {
        this.newPatient = JSON.parse(JSON.stringify(patient));
        this.newPatient.editing = true;
      }
      this.patientModal?.show();
    }
  }

  savePatient() {
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
        if (this.newPatient.editing) {
          result = await this.Main.updatePatient(this.newPatient._id, {updated: this.newPatient}).toPromise();
        } else {
          result = await this.Main.setPatient({news: [this.newPatient]}).toPromise();
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
        this.togglePatient(); 
      }
    })
  }

  deletePatient(item: any) {
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
        let result: any = await this.Main.deletePatient(item._id).toPromise();
        if (!result) {
          Swal.fire({
            text: 'Hubo un error al eliminar el paciente',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se realizo la operación correctamente',
          icon: 'success'
        });
        this.getPatients();
      }
    });  
  }

}
