import { Component, OnInit, ViewChild } from '@angular/core';
import { buildPagination, NUMBER_ROWS } from '../../constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { MainService } from '../../services/main.service';
import { intervalProvider } from 'rxjs/internal/scheduler/intervalProvider';

@Component({
  selector: 'app-inventory',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {

  constructor(
    private Main: MainService
  ) {

  }

  @ViewChild('itemModal', {static: false}) itemModal?: ModalDirective;

  numberRows: number[] = NUMBER_ROWS;

  filter: any = {
    pagination: {
      page: 1,
      limit: 20
    }
  };

  pages: number[] = [];

  newItem: any;

  results: any[] = [];
  inputTypes: any[] = [];
  vaccines: any[] = [];
  medicalStaffs: any[] = [];
  inputTypeFound: any;
  totals: any = {}
  recordStates: any[] = [];

  ngOnInit(): void {
    this.getInputTypes();
    this.getVaccines();
    this.getTotalProducts();
    this.getMedicalStaffs();
  }

  async getMedicalStaffs() {
    let result: any = await this.Main.getMedicalStaff({}).toPromise();
    this.medicalStaffs = result;
    this.totals.medicalStaffs = result.length;
  }

  async getTotalProducts() {
    let result: any = await this.Main.getArticleQuantity({}).toPromise();
    console.log(result);
    this.totals.products = result.quantity;
  }

  async getVaccines() {
    let result: any = await this.Main.getArticle({}).toPromise();
    console.log(result);
    this.vaccines = result;
  }

  async getInputTypes() {
    let result: any = await this.Main.getTypeList({where: { type: 'ENTRY'}}).toPromise();
    console.log(result);
    this.inputTypes = result;

    result = await this.Main.getTypeList({where: { type: 'RECORD-STATE'}}).toPromise();
    this.recordStates = result;
  }


  async search() {
    let body: any = {};
    console.log(this.filter.text);
    // if (!this.filter.text) {
    //   body = {
    //     pagination: this.filter.pagination
    //   };
    //   let result: any = await this.Main.getKardexLastRecords(body).toPromise();
    //   this.filter.searching = false;
    //   this.filter.searched = true;
    //   this.results = result;
    // } else {
      
    // }
    this.filter.searching = true;
    this.results = [];
    this.filter.searched = false;
    if (!this.filter.text) {
      body = {
        where: {}
      }
    } else {
      body = {
        where: {
          $or: [
            {
              "product.code": {$regex: this.filter.text, $options: 'i'}
            },
            {
              "product.name": {$regex: this.filter.text, $options: 'i'}
            },
            {
              reason: {$regex: this.filter.text, $options: 'i'}
            }
          ]
        }
      };
    }
    let result: any = await this.Main.getKardexQuantity(body).toPromise();
    console.log(result);
    this.filter.totalRows = result.quantity;
    if (!this.filter.text) {
      this.totals.kardexs = this.filter.totalRows;
    }
    if (this.filter.totalRows > 0) {
      this.filter.pagination.page = 1;
      this.pages = buildPagination(this.filter.totalRows, this.filter.pagination.limit);
      this.getKardexs();
    } else {
      this.filter.searching = false;
      this.filter.searched = true;
      this.results = [];
    }
  }

  async getKardexs() {
    this.results = [];
    let body: any = {};
    if (!this.filter.text) {
      body.where = {};
    } else {
      body.where = {
        $or: [
          {
            "product.code": {$regex: this.filter.text, $options: 'i'}
          },
          {
            "product.name": {$regex: this.filter.text, $options: 'i'}
          },
          {
            reason: {$regex: this.filter.text, $options: 'i'}
          }
        ]
      }
    }
    body.pagination = this.filter.pagination;

    let result: any = await this.Main.getKardex(body).toPromise();
    this.filter.searching = false;
    this.filter.searched = true;
    this.results = result;
  }

  toggleMovement(item?: any) {
    if (this.itemModal?.isShown) {
      this.itemModal.hide();
    } else {
      this.itemModal!.config.ignoreBackdropClick = true;
      this.itemModal!.config.keyboard = false;
      this.newItem = {};
      if (item) {
        this.newItem = JSON.parse(JSON.stringify(item));
        this.newItem.inputType = this.newItem.inputType._id;
        this.getInputTypeByProduct();
        this.newItem.product = this.newItem.product._id;
        if (this.newItem.assignedTo) {
          this.newItem.assignedTo = this.newItem.assignedTo._id;
        }

        if (this.newItem.status) {
          this.newItem.status = this.newItem.status._id;
        }
        this.newItem.editing = true;
      } else {
        this.newItem.status = this.recordStates.find((r: any) => r.additionalFields.isDefaultValue)._id;
      }
      this.itemModal?.show();
    }
  }

  deleteMovement(item: any) {
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
        let result: any = await this.Main.deleteKardex(item._id).toPromise();
        if (!result) {
          Swal.fire({
            text: 'Hubo un error al eliminar el kardex',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se realizo la operación correctamente',
          icon: 'success'
        });
        this.getKardexs();
      }
    });  
  }

  saveKardex() {
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
        if (this.newItem.editing) {
          this.newItem.status = this.newItem.status || this.recordStates.find((r: any) => r.additionalFields.isDefaultValue)._id;
          result = await this.Main.updateKardex(this.newItem._id, {updated: this.newItem}).toPromise();
        } else {
          this.newItem.status = this.recordStates.find((r: any) => r.additionalFields.isDefaultValue)._id;
          result = await this.Main.setKardex({news: [this.newItem]}).toPromise();
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
        this.toggleMovement();
        this.getKardexs();
      }
    })
  }
  
  deleteKardex(item: any) {
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
        let result: any = await this.Main.deleteKardex(item._id).toPromise();
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

  getInputTypeByProduct() {
    console.log(this.newItem);
    let inputTypeFound: any = this.inputTypes.find((i: any) => i._id === this.newItem.inputType);
    console.log(inputTypeFound);
    if (inputTypeFound) {
      this.inputTypeFound = inputTypeFound;
      this.newItem.valueToCalculate = inputTypeFound.valueToCalculate;
    }
  }

  changePage(page: number) {
    this.filter.pagination.page = page;
    this.getKardexs();
  }
}
