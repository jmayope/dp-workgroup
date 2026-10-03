import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-management',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    TabsModule
  ],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit {

  constructor(
    private Main: MainService
  ) {

  }

  @ViewChild('profileModal', {static: false}) profileModal?: ModalDirective;
  @ViewChild('specialtyModal', {static: false}) specialtyModal?: ModalDirective;
  @ViewChild('specialtyControlModal', {static: false}) specialtyControlModal?: ModalDirective;
  @ViewChild('growthStageModal', {static: false}) growthStageModal?: ModalDirective;
  @ViewChild('serviceDeliveryInstitutionModal', {static: false}) serviceDeliveryInstitutionModal?: ModalDirective;
  @ViewChild('healthNetworkModal', {static: false}) healthNetworkModal?: ModalDirective;
  @ViewChild('typeListModal', {static: false}) typeListModal?: ModalDirective;
  
  filter: any = {
    profile: {},
    specialty: {},
    growthStage: {},
    specialtyProcess: {},
    serviceDeliveryInstitution: {},
    healthNetwork: {},
    typeList: {}
  }

  specialtySelected: any;

  newServiceDeliveryInstitution: any;
  newProfile: any;
  newGrowthStage: any;
  newSpecialty: any;
  newSpecialtyControl: any;
  newSpecialtyProcess: any;
  newHealthNetwork: any;
  newTypeList: any;
  categories: any[] = [];
  results: any = {
    profiles: [],
    specialties: [],
    growthStages: [],
    specialtyProcesses: [],
    serviceDeliveryInstitutions: [],
    healthNetworks: []
  }

  ngOnInit() {
    this.getHealthNetworks();
    this.getServiceDeliveryInstitutions();
    this.getProfiles();
    this.getSpecialties();
    this.getGrowthStages();
    this.getTypeLists();
  }

  async getTypeLists() {
    let body: any = {};
    let result: any = await this.Main.getTypeList(body).toPromise();
    let groups: any[] = [];
    result.map((r: any) => {
      let groupFound: any = groups.find((g: any) => g._id === r.type);
      if (!groupFound) {
        groups.push({
          _id: r.type,
          name: r.type,
          description:r.type,
          children: [JSON.parse(JSON.stringify(r))]
        });
      } else {
        groupFound.children.push(JSON.parse(JSON.stringify(r)));
      }
    })
    console.log(groups);
    this.categories = groups;
    this.results.typeLists = result;
  }

  async getHealthNetworks() {
    let body: any = {};
    let result: any = await this.Main.getHealthNetworks(body).toPromise();
    this.results.healthNetworks = result;
  }

  async getServiceDeliveryInstitutions() {
    let body: any = {};
    let result: any = await this.Main.getServiceDeliveryInstitutions(body).toPromise();
    this.results.serviceDeliveryInstitutions = result;
  }

  async getGrowthStages() {
    let body: any = {};
    let result: any = await this.Main.getGrowthStages(body).toPromise();
    this.results.growthStages = result;
  }

  async getSpecialties() {
    let body: any = {};
    let result: any = await this.Main.getSpecialties(body).toPromise();
    this.results.specialties = result;
  }

  async getProfiles() {
    let body: any = {};
    let result: any = await this.Main.getProfiles(body).toPromise();
    console.log(result);
    this.results.profiles = result;
  }

  search(type: string) {
    console.log(type);
  }

  toggleServiceDeliveryInstitution(serviceDeliveryInstitution?: any) {
    if (this.serviceDeliveryInstitutionModal?.isShown) {
      this.serviceDeliveryInstitutionModal.hide();
    } else {
      this.serviceDeliveryInstitutionModal!.config.keyboard = false;
      this.serviceDeliveryInstitutionModal!.config.ignoreBackdropClick = true;
      this.serviceDeliveryInstitutionModal?.show();
      this.newServiceDeliveryInstitution = {};
      if (serviceDeliveryInstitution) {
        this.newServiceDeliveryInstitution = JSON.parse(JSON.stringify(serviceDeliveryInstitution));
        this.newServiceDeliveryInstitution.editing = true;
      }
    }
  }

  saveServiceDeliveryInstitution() {
    Swal.fire({
      text: '¿Seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any;
        let result: any;
        if (!this.newServiceDeliveryInstitution.editing) {
          body = {news: [this.newServiceDeliveryInstitution]}
          result = await this.Main.setServiceDeliveryInstitution(body).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newServiceDeliveryInstitution));
          delete body._id;
          result = await this.Main.updateServiceDeliveryInstitution(this.newServiceDeliveryInstitution._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error',
            icon: 'error'
          });
        }
        Swal.fire({
          text: 'Se completo la acción',
          icon: 'success'
        });
        this.toggleServiceDeliveryInstitution();
        this.getServiceDeliveryInstitutions();
      }
    })
  }

  deleteItem(item: any, type: string) {
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
        let result: any;
        switch (type) {
          case 'serviceDeliveryInstitution':
            result = await this.Main.deleteServiceDeliveryInstitution(item._id).toPromise();
            break;
          case 'profile':
            result = await this.Main.deleteTypeList(item._id).toPromise();
            break;
          case 'healthNetwork':
            result = await this.Main.deleteHealthNetwork(item._id).toPromise();
            break;
          case 'growthStage':
            result = await this.Main.deleteGrowthStage(item._id).toPromise();
            break;
          case 'specialty':
            result = await this.Main.deleteSpecialty(item._id).toPromise();
            break;
          default:
            break;
          }
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
        switch (type) {
          case 'serviceDeliveryInstitution':
            this.getServiceDeliveryInstitutions();
            break;
          case 'profile':
            this.getProfiles();
            break;
          case 'healthNetwork':
            this.getHealthNetworks();
            break;
          case 'growthStage':
            this.getGrowthStages();
            break;
          case 'specialty':
            this.getGrowthStages();
            break;
          default:
            break;
        }
      }
    });
  }

  toggleHealthNetwork(healthNetwork?: any) {
    if (this.healthNetworkModal?.isShown) {
      this.healthNetworkModal.hide();
    } else {
      this.healthNetworkModal!.config.keyboard = false;
      this.healthNetworkModal!.config.ignoreBackdropClick = true;
      this.healthNetworkModal?.show();
      this.newHealthNetwork = {};
      if (healthNetwork) {
        this.newHealthNetwork = JSON.parse(JSON.stringify(healthNetwork));
        this.newHealthNetwork.editing = true;
      }
    }
  }

  saveHealthNetwork() {
    Swal.fire({
      text: '¿Seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any;
        let result: any;
        if (!this.newHealthNetwork.editing) {
          body = {news: [this.newHealthNetwork]}
          result = await this.Main.setHealthNetwork(body).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newHealthNetwork));
          delete body._id;
          console.log(this.newHealthNetwork);
          result = await this.Main.updateHealthNetwork(this.newHealthNetwork._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error',
            icon: 'error'
          });
        }
        Swal.fire({
          text: 'Se completo la acción',
          icon: 'success'
        });
        this.toggleHealthNetwork();
        this.getHealthNetworks();
      }
    })
  }

  toggleTypeList(typeList?: any) {
    if (this.typeListModal?.isShown) {
      this.typeListModal.hide();
    } else {
      this.typeListModal!.config.keyboard = false;
      this.typeListModal!.config.ignoreBackdropClick = true;
      this.typeListModal?.show();
      this.newTypeList = {
        additionalFields: {}
      };
      if (typeList) {
        this.newTypeList = JSON.parse(JSON.stringify(typeList));
        this.newTypeList.editing = true;
        this.newTypeList.additionalFields = this.newTypeList.additionalFields || {};
      }
    }
  }

  saveTypeList() {
    Swal.fire({
      text: '¿Seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any;
        let result: any;
        if (!this.newTypeList.editing) {
          if (this.newTypeList.additionalFields.selfGeneratingCode) {
            let lastCode = 1;
            let anotherItems = this.results.typeLists.filter((t: any) => t.type === this.newTypeList.type);
            if (anotherItems.length) {
              lastCode = Math.max(...anotherItems.map((i: any) => parseInt(i.code)));             
              lastCode += 1;
            }
            this.newTypeList.code = `${lastCode}`.padStart(3, '0');
          }
          body = {news: [this.newTypeList]}
          result = await this.Main.setTypeList(body).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newTypeList));
          delete body._id;
          result = await this.Main.updateTypeList(this.newTypeList._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error',
            icon: 'error'
          });
        }
        Swal.fire({
          text: 'Se completo la acción',
          icon: 'success'
        });
        this.toggleTypeList();
        this.getTypeLists();
      }
    })
  }


  toggleProfile(profile?: any) {
    if (this.profileModal?.isShown) {
      this.profileModal.hide();
    } else {
      this.profileModal!.config.keyboard = false;
      this.profileModal!.config.ignoreBackdropClick = true;
      this.profileModal?.show();
      this.newProfile = {};
      if (profile) {
        this.newProfile = JSON.parse(JSON.stringify(profile));
        this.newProfile.editing = true;
      }
    }
  }

  saveProfile() {
    Swal.fire({
      text: '¿Seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any;
        let result: any;
        if (!this.newProfile.editing) {
          body = {news: [this.newProfile]}
          result = await this.Main.setProfile(body).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newProfile));
          delete body._id;
          result = await this.Main.updateProfile(this.newProfile._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error',
            icon: 'error'
          });
        }
        Swal.fire({
          text: 'Se completo la acción',
          icon: 'success'
        });
        this.toggleProfile();
        this.getProfiles();
      }
    })
  }

  toggleGrowthStage(growthStage?: any) {
    if (this.growthStageModal?.isShown) {
      this.growthStageModal.hide();
    } else {
      this.growthStageModal!.config.keyboard = false;
      this.growthStageModal!.config.ignoreBackdropClick = true;
      this.growthStageModal?.show();
      this.newGrowthStage = {};
      if (growthStage) {
        this.newGrowthStage = JSON.parse(JSON.stringify(growthStage));
        this.newGrowthStage.editing = true;
      }
    }
  }

  saveGrowthStage() {
    Swal.fire({
      text: '¿Seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any;
        let result: any;
        if (!this.newGrowthStage.editing) {
          body = {news: [this.newGrowthStage]}
          result = await this.Main.setGrowthStage(body).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newGrowthStage));
          delete body._id;
          result = await this.Main.updateGrowthStage(this.newGrowthStage._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error',
            icon: 'error'
          });
        }
        Swal.fire({
          text: 'Se completo la acción',
          icon: 'success'
        });
        this.toggleGrowthStage();
        this.getGrowthStages();
      }
    })
  }

  toggleSpecialty(specialty?: any) {
    if (this.specialtyModal?.isShown) {
      this.specialtyModal.hide();
    } else {
      this.specialtyModal!.config.keyboard = false;
      this.specialtyModal!.config.ignoreBackdropClick = true;
      this.specialtyModal?.show();
      this.newSpecialty = {};
      if (specialty) {
        this.newSpecialty = JSON.parse(JSON.stringify(specialty));
        this.newSpecialty.editing = true;
      }
    }
  }

  saveSpecialty() {
    Swal.fire({
      text: '¿Seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any;
        let result: any;
        if (!this.newSpecialty.editing) {
          body = {news: [this.newSpecialty]}
          result = await this.Main.setSpecialty(body).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newSpecialty));
          delete body._id;
          result = await this.Main.updateSpecialty(this.newSpecialty._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error',
            icon: 'error'
          });
        }
        Swal.fire({
          text: 'Se completo la acción',
          icon: 'success'
        });
        this.toggleSpecialty();
        this.getSpecialties();
      }
    })
  }

  async toggleSpecialtyConfig(specialty?: any) {
    if (this.specialtyControlModal?.isShown) {
      this.newSpecialtyControl = undefined;
      this.specialtyControlModal?.hide();
    } else {
      this.specialtyControlModal!.config.keyboard = false;
      this.specialtyControlModal!.config.ignoreBackdropClick = true;
      this.specialtyControlModal?.show();
      this.specialtySelected = JSON.parse(JSON.stringify(specialty));
      this.getSpecialtyControls();
      this.getSpecialtyProcesses();
    }
  }

  async getSpecialtyControls() {
    let result: any = await this.Main.getSpecialtyControls({specialty: this.specialtySelected._id}).toPromise();
    this.specialtySelected.controls = result;
  }

  async getSpecialtyProcesses() {
    let result: any = await this.Main.getSpecialtyProcesses({specialty: this.specialtySelected._id}).toPromise();
    this.specialtySelected.specialtyProcesses = result;
  }
  
  toggleSpecialtyControl(specialtyControl?: any, willBeEliminated: boolean = false) {
    if (willBeEliminated) {
      Swal.fire({
        text: '¿Seguro de eliminar el control?',
        icon: 'question',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: true,
        showCancelButton: true
      }).then(async (choice) => {
        if (choice.isConfirmed) {
          let result: any = await this.Main.deleteSpecialtyControl(specialtyControl._id).toPromise();
          if (!result) {
            Swal.fire({
              text: 'Hubo un error.',
              icon: 'error'
            });
            return;
          }
          Swal.fire({
            text: 'Se realizaron los cambios',
            icon: 'success'
          });
          this.getSpecialtyControls();
        }
      })
    } else {
      if (this.newSpecialtyControl) {
        if (specialtyControl) {
          this.newSpecialtyControl = JSON.parse(JSON.stringify(specialtyControl))
          this.newSpecialtyControl.editing = true;
        } else {
          this.newSpecialtyControl = undefined;
        }
      } else {
        this.newSpecialtyControl = {  
          minimumOrder: this.specialtySelected.controls.length + 1,
          order: this.specialtySelected.controls.length + 1,
          specialty: this.specialtySelected._id,
        };
      }
    }
  }

  saveSpecialtyControl() {
    Swal.fire({
      text: '¿seguro de guardar cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true      
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any;
        let result: any;
        if (!this.newSpecialtyControl.editing) {
          body = {news: [this.newSpecialtyControl]}
          await this.Main.setSpecialtyControl(body).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newSpecialtyControl));
          delete body._id;
          result = await this.Main.updateSpecialty(this.newSpecialtyControl._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error',
            icon: 'error'
          });
        }
        Swal.fire({
          text: 'Se completo la acción',
          icon: 'success'
        });
        this.toggleSpecialtyControl();
        this.getSpecialtyControls();
      }
    })
  }

  toggleSpecialtyProcess(specialtyProcess?: any, willBeEliminated: boolean = false) {
    if (willBeEliminated) {
      Swal.fire({
        text: '¿Seguro de eliminar el control?',
        icon: 'question',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: true,
        showCancelButton: true
      }).then(async (choice) => {
        if (choice.isConfirmed) {
          let result: any = await this.Main.deleteSpecialtyProcess(specialtyProcess._id).toPromise();
          if (!result) {
            Swal.fire({
              text: 'Hubo un error.',
              icon: 'error'
            });
            return;
          }
          Swal.fire({
            text: 'Se realizaron los cambios',
            icon: 'success'
          });
          this.getSpecialtyProcesses();
        }
      })
    } else {
      if (this.newSpecialtyProcess) {
        if (specialtyProcess) {
          this.newSpecialtyProcess = JSON.parse(JSON.stringify(specialtyProcess))
          this.newSpecialtyProcess.editing = true;
        } else {
          this.newSpecialtyProcess = undefined;
        }
      } else {
        this.newSpecialtyProcess = {  
          specialty: this.specialtySelected._id,
        };
      }
    }
  }

  saveSpecialtyProcess() {
    Swal.fire({
      text: '¿seguro de guardar cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true      
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any;
        let result: any;
        if (!this.newSpecialtyProcess.editing) {
          body = {news: [this.newSpecialtyProcess]}
          await this.Main.setSpecialtyProcess(body).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newSpecialtyProcess));
          delete body._id;
          result = await this.Main.updateSpecialtyProcess(this.newSpecialtyProcess._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error',
            icon: 'error'
          });
        }
        Swal.fire({
          text: 'Se completo la acción',
          icon: 'success'
        });
        this.toggleSpecialtyProcess();
        this.getSpecialtyProcesses();
      }
    })
  }

  toggleSelfGeneratingCode() {
    this.newTypeList.additionalFields.selfGeneratingCode = !this.newTypeList.additionalFields.selfGeneratingCode;
  }

  toggleHasValueToCalculate() {
    this.newTypeList.additionalFields.hasValueToCalculate = !this.newTypeList.additionalFields.hasValueToCalculate;
    this.newTypeList.valueToCalculate = undefined;
  }

  toggleIsDefaultValue() {
    let currentList: any = this.results.typeLists.filter((t: any) => t.type === this.newTypeList.type);
    console.log(currentList);
    let itemWithDefaultValue = currentList.find((c: any) => c.additionalFields.isDefaultValue);
    if (itemWithDefaultValue) {
      Swal.fire({
        text: `Ya existe un valor por defecto para el TIPO\n Item: ${itemWithDefaultValue.name}`,
        icon: 'info'
      });
      return;
    } else {
      this.newTypeList.additionalFields.isDefaultValue = !this.newTypeList.additionalFields.isDefaultValue;

    }
    // this.newTypeList.valueToCalculate = undefined;
  }
}
