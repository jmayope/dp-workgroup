import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { buildPagination, NUMBER_ROWS } from '../../constants';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-query',
  imports: [
    CommonModule,
    FormsModule, 
    ModalModule
  ],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent implements OnInit {

  @ViewChild('medicalHistoryModal', {static: false}) medicalHistoryModal?: ModalDirective;

  constructor(
    private Main: MainService
  ) {}
  
  numberRows: any[] = NUMBER_ROWS;
  filter: any = {
    pagination: {
      page: 1,
      limit: 20
    }
  }
  patientSelected: any;
  results: any[] = [];
  pages: any[] = [];
  

  ngOnInit() {
    this.filter.pagination.limit = this.numberRows[0];
  }

  async search() {
    this.filter.searching = true;
    this.results = [];
    this.filter.searched = false;
    let body: any = {
      // where: {
      //   $text: {$search: this.filter.text}
      // }
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
    let body = {
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
    let result: any = await this.Main.getPatients(body).toPromise();
    this.filter.searching = false;
    this.filter.searched = true;
    this.results = result;
  }

  resetSearch() {
    this.filter.text = undefined;
    this.filter.searched = false;
  }

  async toggleMedicalHistory(patient?: any) {
    if (this.medicalHistoryModal?.isShown) {
      this.medicalHistoryModal.hide();
    } else {
      console.log(patient);
      let body: any = {
        where: {
          patient: patient._id
        }
      }
      let result: any = await this.Main.getMedicalHistory(body).toPromise();
      console.log(result);
      this.patientSelected = patient;
      this.patientSelected.medicalHistories = result;
      if (this.patientSelected.medicalHistories.length === 1) {
        this.patientSelected.currentMedicalHistory = this.patientSelected.medicalHistories[0];
      }
      this.medicalHistoryModal!.config.keyboard = false;
      this.medicalHistoryModal!.config.ignoreBackdropClick = true;
      this.medicalHistoryModal?.show();
    }
  }

  toggleSelectMedicalHistory(medicalHistory: any) {
    if (this.patientSelected.currentMedicalHistory && this.patientSelected.currentMedicalHistory._id === medicalHistory._id) {
      this.patientSelected.currentMedicalHistory = undefined; 
    } else {
      this.patientSelected.currentMedicalHistory = medicalHistory;
    }
  }

}
