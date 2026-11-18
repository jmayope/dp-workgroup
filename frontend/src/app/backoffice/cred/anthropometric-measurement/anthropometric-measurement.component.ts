import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anthropometric-measurement',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  templateUrl: './anthropometric-measurement.component.html',
  styleUrl: './anthropometric-measurement.component.css'
})
export class AnthropometricMeasurementComponent implements OnInit {
  
  @ViewChild('configModal', {static: false}) configModal?: ModalDirective;

  constructor(
    private Main: MainService
  ) {

  }


  filter: any = {
    pagination: {
      page: 1,
      limit: 20
    }
  };
  pagination: any = {};
  results: any[] = [];

  categories: any[] = [
    'Peso',
    'Longitud',
    'Circunferencia',
    'Pliegue',
    'Ancho',
    'Índice',
  ]

  anthropometricMeasurements: any[] = [];
  
  newAnthropometricMeasurement: any;

  ngOnInit() {
    this.getAnthropometricMeasurements();
  }

  async getAnthropometricMeasurements() {
    let result: any = await this.Main.getAnthropometricMeasurement({}).toPromise();
    console.log(result);
    this.anthropometricMeasurements = result;
  }

  async getQuantityOfPatientMeasurement() {
    this.filter.searching = true;
    this.filter.searched = false;
  }

  toggleConfigModal() {
    if (this.configModal?.isShown) {
      this.configModal.hide();
    } else {
      this.configModal!.config.keyboard = false;
      this.configModal!.config.ignoreBackdropClick = true;
      this.configModal?.show();
    }
  }

  toggleAnthropometricMeasurement(item?: any) {
    if (this.newAnthropometricMeasurement) {
      this.newAnthropometricMeasurement = undefined;
    } else {
      this.newAnthropometricMeasurement = {};
      if (item) {
        this.newAnthropometricMeasurement = JSON.parse(JSON.stringify(item));
        this.newAnthropometricMeasurement.editing = true;
      }
    }
  }

  async saveAnthropometricMeasurement() {
    Swal.fire({
      title: '¿Estas seguro de grabar este item?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let result: any;
        if (this.newAnthropometricMeasurement.editing) {
          result = await this.Main.updateAnthropometricMeasurement(this.newAnthropometricMeasurement._id, {updated: this.newAnthropometricMeasurement}).toPromise();
        } else {
          result = await this.Main.setAnthropometricMeasurement({news: [this.newAnthropometricMeasurement]}).toPromise();
        }
        console.log(result);
        Swal.fire({
          title: 'Se grabaron los cambios correctamente',
          icon: 'success'
        });
        this.toggleAnthropometricMeasurement();
        this.getAnthropometricMeasurements();
      }
    })
  }

  deleteAnthropometricMeasurement(item: any) {
    Swal.fire({
      title: '¿Estás seguro de eliminar el item?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false,
      showCancelButton: true,
      showConfirmButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let result: any = await this.Main.deleteAnthropometricMeasurement(item._id).toPromise();
        Swal.fire({
          title: 'Se realizo la operación correctamente',
          icon: 'success'
        });
        this.getAnthropometricMeasurements();
      }
    })
  }

}
