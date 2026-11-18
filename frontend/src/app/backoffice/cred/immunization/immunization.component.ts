import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { MainService } from '../../../services/main.service';
import Swal from 'sweetalert2';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-immunization',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    TabsModule
  ],
  templateUrl: './immunization.component.html',
  styleUrl: './immunization.component.css'
})
export class ImmunizationComponent implements OnInit{

  @ViewChild('articleModal', {static: false}) articleModal?: ModalDirective;
  @ViewChild('categoryModal', {static: false}) categoryModal?: ModalDirective;
  @ViewChild('growthStageModal', {static: false}) growthStageModal?: ModalDirective;
  @ViewChild('configGrowthStageModal', {static: false}) configGrowthStageModal?: ModalDirective;
  @ViewChild('doseModal', {static: false}) doseModal?: ModalDirective;

  constructor(
    private Main: MainService
  ) {

  }

  
  growthStages: any[] = [];
  articles: any[] = [];
  doses: any[] = [];
  categories: any[] = [];
  newDose: any;
  newArticle: any;
  newCategory: any;
  newGrowthStage: any;
  growthStageSelected: any;
  articleSelected: any;
  categorySelected: any;
  vaccines: any[] = [];
  newVaccine: any;

  ngOnInit(): void {
    this.getGrowthStages();
    this.getArticles();
    this.getCategories();
    this.getVaccines();
  }

  async getVaccines() {
    let result: any = await this.Main.getArticle({where: {}}).toPromise();
    console.log(result);
    this.vaccines = result;
  }
  
  async getCategories() {
    let result: any = await this.Main.getTypeList({where: {type: 'PRODUCT-CATEGORY'}}).toPromise();
    this.categories = result;
  }
  
  async getGrowthStages() {
    let result: any = await this.Main.getGrowthStages({}).toPromise();
    result.map((r: any) => {
      r.vaccines = r.vaccines || [];
    })
    this.growthStages = result;
  }
  
  async getArticles() {
    let result: any = await this.Main.getArticle({}).toPromise();
    this.articles = result;
    this.getDoses();
  }

  async getDoses() {
    let result: any = await this.Main.getDose({}).toPromise();
    this.doses = result;
    console.log(this.doses);
    this.articles.map((v: any) => {
      v.doses = this.doses.filter((d: any) => d.vaccine._id == v._id);
    });
    console.log(this.articles);
  }

  toggleArticleModal(item?: any) {
    if (this.articleModal?.isShown) {
      this.articleModal.hide();
    } else {
      this.articleModal!.config.keyboard = false;
      this.articleModal!.config.ignoreBackdropClick = true;
      this.newArticle = {
        additionalFields: {}
      };
      if (item) {
        this.newArticle = JSON.parse(JSON.stringify(item));
        this.newArticle.editing = true;
      }
      this.articleModal?.show();
    }
  }

  toggleCategoryModal(item?: any) {
    if (this.categoryModal?.isShown) {
      this.categoryModal.hide();
    } else {
      this.categoryModal!.config.keyboard = false;
      this.categoryModal!.config.ignoreBackdropClick = true;
      this.newCategory = {
        type: 'PRODUCT-CATEGORY'
      };
      if (item) {
        this.newCategory = JSON.parse(JSON.stringify(item));
        this.newCategory.editing = true;
        this.newCategory.additionalFields = this.newCategory.additionalFields || {};
      }
      this.categoryModal?.show();
    }
  }
  
  saveArticle() {
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
        if (this.newArticle.editing) {
          result = await this.Main.updateArticle(this.newArticle._id, {updated: this.newArticle}).toPromise();
        } else {
          result = await this.Main.setArticle({news: [this.newArticle]}).toPromise();
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
        this.toggleArticleModal();
        this.getArticles();
      }
    })
  }
  
  deleteArticle(item: any) {
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
        let result: any = await this.Main.deleteArticle(item._id).toPromise();
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
        this.getArticles();
      }
    });
  }

  saveCategory() {
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
        if (this.newCategory.editing) {
          result = await this.Main.updateTypeList(this.newCategory._id, {updated: this.newCategory}).toPromise();
        } else {
          result = await this.Main.setTypeList({news: [this.newCategory]}).toPromise();
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
        this.toggleCategoryModal();
        this.getCategories();
      }
    })
  }
  
  deleteCategory(item: any) {
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
        let result: any = await this.Main.deleteTypeList(item._id).toPromise();
        if (!result) {
          Swal.fire({
            text: 'Hubo un error al eliminar la Categoria',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se realizo la operación correctamente',
          icon: 'success'
        });
        this.getCategories();
      }
    });
  }
  
  toggleDoseModal(vaccine?: any) {
    if (this.doseModal?.isShown) {
      this.doseModal.hide();
    } else {
      this.doseModal!.config.keyboard = false;
      this.doseModal!.config.ignoreBackdropClick = true;
      this.articleSelected = vaccine;
      this.doseModal?.show();
    }
  }
  
  toggleDose(item?: any) {
    if (this.newDose) {
      this.newDose = undefined;
    } else {
      this.newDose = {
        vaccine: this.articleSelected._id
      };
      if (item) {
        this.newDose = JSON.parse(JSON.stringify(item));
        this.newDose.editing = true;
      }
    }
  }
  
  saveDose() {
    Swal.fire({
      text: '¿Estás seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let result: any;
        if (this.newDose.editing) {
          result = await this.Main.updateDose(this.newDose._id, {updated: this.newDose}).toPromise();
        } else {
          result = await this.Main.setDose({news: [this.newDose]}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: `Hubo un error al ${this.newDose.editing ? 'actualizar' : 'crear' } la Dosis`,
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se realizo la operación satisfactoriamente',
          icon: 'success'
        });
        this.getDoses();
        
      }
    })
  }
  
  deleteDose(dose: any) {
    Swal.fire({
      text: '¿Estás seguro de eliminar el item?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let result: any = await this.Main.deleteDose(dose._id).toPromise();
        if (!result) {
          Swal.fire({
            text: 'Hubo un error al eliminar la Dosis',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se realizo la operación correctamente',
          icon: 'success'
        });
        this.getDoses();
      }
    })
  }

  toggleGrowthStageModal(item?: any) {
    if (this.growthStageModal?.isShown) {
      this.growthStageModal.hide();
    } else {
      this.growthStageModal!.config.keyboard = false;
      this.growthStageModal!.config.ignoreBackdropClick = true;
      this.newGrowthStage = {};
      if (item) {
        this.newGrowthStage = JSON.parse(JSON.stringify(item));
        this.newGrowthStage.editing = true;
      }
      this.growthStageModal?.show();
    }
  }

  saveGrowthStage() {
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
        if (this.newGrowthStage.editing) {
          result = await this.Main.updateGrowthStage(this.newGrowthStage._id, {updated: this.newGrowthStage}).toPromise();
        } else {
          result = await this.Main.setGrowthStage({news: [this.newGrowthStage]}).toPromise();
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
        this.toggleGrowthStageModal();
        this.getGrowthStages();
      }
    })
  }
  
  deleteGrowthStage(item: any) {
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
        let result: any = await this.Main.deleteGrowthStage(item._id).toPromise();
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
        this.getGrowthStages();
      }
    });
  }

  toggleShowOptionalFields() {
    this.newArticle.showOptionalFields = !this.newArticle.showOptionalFields;
  }

  toggleDoseApply(item: any) {
    item.additionalFields.doseApply = !item.additionalFields.doseApply;
  }

  toggleConfigGrowthStageModal(growthStage?: any) {
    console.log(growthStage);
    if (this.configGrowthStageModal?.isShown) {
      this.newVaccine = undefined;
      this.configGrowthStageModal.hide();
    } else {
      this.configGrowthStageModal!.config.keyboard = false;
      this.configGrowthStageModal!.config.ignoreBackdropClick = true;
      this.configGrowthStageModal?.show();
      this.growthStageSelected = growthStage;
    }
  }

  addVaccine() {
    this.newVaccine = this.newVaccine === undefined ? {} : undefined;
  }

  saveVaccine() {
    Swal.fire({
      icon: 'question',
      text: '¿Estás seguro de agregar la vacuna a la Etapa de Crecimiento?',
      showConfirmButton: true,
      showCancelButton: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        console.log(this.newVaccine);
        let body: any = {updated: JSON.parse(JSON.stringify(this.growthStageSelected))};
        delete body.updated._id;
        body.updated.vaccines.push(this.newVaccine);
        let result: any = await this.Main.updateGrowthStage(this.growthStageSelected._id, body).toPromise();
        console.log(result);
        if (!result) {
          Swal.fire({
            icon: 'error',
            text: 'Hubo un error al agregar la vacuna la Etapa de Crecimiento'
          });
          return;
        }
        Swal.fire({
          icon: 'success',
          text: 'Vacuna guardada correctamente'
        });
        console.log("Agregamos la vacuna al array de vacunas");
        let vaccineSelected = this.vaccines.find((v: any) => v._id === this.newVaccine._id);
        this.growthStageSelected.vaccines.push(vaccineSelected);
        this.addVaccine();
      }
    })
  }

  deleteVaccine(vaccine: any) {
    Swal.fire({
      icon: 'question',
      text: '¿Estás seguro de eliminar la vacuna?',
      showCancelButton: true,
      showConfirmButton: true,
      allowEscapeKey: false,
      allowOutsideClick: false
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        console.log(this.newVaccine);
        let body: any = {updated: JSON.parse(JSON.stringify(this.growthStageSelected))};
        delete body.updated._id;
        body.updated.vaccines = body.updated.vaccines.filter((v: any) => v._id !== vaccine._id);
        let result: any = await this.Main.updateGrowthStage(this.growthStageSelected._id, body).toPromise();
        console.log(result);
        if (!result) {
          Swal.fire({
            icon: 'error',
            text: 'Hubo un error al agregar la vacuna la Etapa de Crecimiento'
          });
          return;
        }
        Swal.fire({
          icon: 'success',
          text: 'Vacuna guardada correctamente'
        });
        console.log("Agregamos la vacuna al array de vacunas");
        this.growthStageSelected.vaccines = this.growthStageSelected.vaccines.filter((v: any) => v._id !== vaccine._id);
      }
    })
  }
}
