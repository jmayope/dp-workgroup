import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { buildPagination, GENDERS, NUMBER_ROWS } from '../../constants';

@Component({
  selector: 'app-reporting',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.css'
})
export class ReportingComponent implements OnInit{

  constructor(
    private Main: MainService
  ) {

  }

  results: any[] = [];
  filter: any = {
    show: true,
    where: {},
    pagination: {
      page: 1,
    }
  };

  genders: any[] = GENDERS;
  healthNetworks: any[] = [];
  serviceDeliveryInstitutions: any[] = [];
  numberRows: any[] = NUMBER_ROWS;
  pages: any[] = [];
  patientSelected: any;
  ngOnInit() {
    this.filter.pagination.limit = this.numberRows[0];
    this.getInitialData();
  }

  async getInitialData() {
    let body: any = {};
    let healthNetworks: any = await this.Main.getHealthNetworks(body).toPromise();
    this.healthNetworks = healthNetworks;

    let serviceDeliveryInstitutions: any = await this.Main.getServiceDeliveryInstitutions(body).toPromise();
    this.serviceDeliveryInstitutions = serviceDeliveryInstitutions;

    
  }

  toggleFilters() {
    this.filter.show = !this.filter.show;
  }


  async getQuantity() {
    this.filter.searched = false;
    let body: any = {
      where: this.filter.where
    };
    let result: any = await this.Main.getPatientQuantity(body).toPromise();
    console.log(result);
    this.filter.totalRows = result.quantity;
    if (this.filter.totalRows > 0) {
      this.filter.pagination.page = 1;
      this.pages = buildPagination(this.filter.totalRows, this.filter.pagination.limit);
      this.getPatients();
    } else {
      this.filter.searched = true;
      this.results = [];
    }
    this.filter.searched = true;
    this.results = result;
  }

  async getPatients() {
    let body: any = {
      where: this.filter.where,
      pagination: this.filter.pagination
    };
    let result: any = await this.Main.getPatients(body).toPromise();
    console.log(result);
    this.results = result;
  }

  resetSearch() {
    this.filter.searched = false;
    this.results = [];
  }


  async exportData() {
    console.log(this.filter);
    let result: any = await this.Main.exportPatients({where: this.filter.where}).toPromise();
    console.log(result);
  }


  toggleMedicalHistory(patient: any) {
    this.patientSelected = patient;
  }

}
