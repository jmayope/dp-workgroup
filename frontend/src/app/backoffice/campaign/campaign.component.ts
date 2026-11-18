import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { CAMPAIGN_STATUS_PENDING_CODE, messageAlert } from '../../constants';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-campaign',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.css'
})
export class CampaignComponent implements OnInit {

  constructor(
    private Main: MainService,
    private Router: Router
  ) {
    
  }


  filter: any = {};

  campaignTypes: any[] = [];
  campaignStatus: any[] = [];
  newCampaign: any;
  articles: any[] = [];
  articlesFiltereds: any[] = [];
  medicalStaffs: any[] = [];
  campaigns: any[] = [];
  userLoged: any;
  inputTypes: any[] = [];
  recordStates: any[] = [];
  CAMPAIGN_STATUS_PENDING_CODE: string = CAMPAIGN_STATUS_PENDING_CODE;
  @ViewChild('campaignModal', {static: false}) campaignModal?: ModalDirective;

  currentDate: any;
  newResource: any;
  newPersonal: any;

  ngOnInit(): void {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.userLoged = this.Main.getSession();
    if (!this.userLoged.currentHealthEstablishment) {
      Swal.fire({
        icon: 'warning',
        text: 'No tienes asignado ningún establecimiento. No podras continuar.',
        allowEscapeKey:false,
        allowOutsideClick: false,
      });
      this.Router.navigate(["/backoffice/tablero"]);
      return;
    }
    this.getCampaignTypes();
    this.getCampaignStatus();
    this.getArticles();
    this.getMedicalStaffs();
    this.getCampaigns();
    this.getInputTypes();
    this.getRecordStates();
  }

  async getRecordStates() {
    let result: any = await this.Main.getTypeList({where: {type: 'RECORD-STATE'}}).toPromise();
    this.recordStates = result;
  }

  async getInputTypes() {
    let result: any = await this.Main.getTypeList({where: {type: 'ENTRY'}}).toPromise();
    this.inputTypes = result;
  }

  async getCampaigns() {
    let _where: any = {};
    if (this.userLoged.currentHealthEstablishment) {
      _where.serviceDeliveryInstitution = this.userLoged.currentHealthEstablishment.serviceDeliveryInstitution._id;
    }
    let result: any = await this.Main.getCampaign({where: _where}).toPromise();
    this.campaigns = result;
  }

  async getMedicalStaffs() {
    let _where: any = {};
    if (this.userLoged.currentHealthEstablishment) {
      _where = {healthEstablisments: {$elemMatch: {serviceDeliveryInstitution: this.userLoged.currentHealthEstablishment.serviceDeliveryInstitution._id}}};
    }
    let result: any = await this.Main.getMedicalStaff({where: _where}).toPromise();
    this.medicalStaffs = result;
  }

  async getArticles() {
    let result: any = await this.Main.getKardexMasters({where: {}}).toPromise();
    console.log(result);
    this.articles = result;
    this.articlesFiltereds = result;
  }

  async getCampaignTypes() {
    let result: any = await this.Main.getTypeList({where: {type: 'ACTIVITY-TYPE'}}).toPromise();
    this.campaignTypes = result;
  }

  async getCampaignStatus() {
    let result: any = await this.Main.getTypeList({where: {type: 'CAMPAIGN-STATUS'}}).toPromise();
    this.campaignStatus = result;
  }

  toggleCampaign(campaign?: any) {
    if (this.campaignModal?.isShown) {
      this.campaignModal.hide();
    } else {
      this.newCampaign = {
        serviceDeliveryInstitution: this.userLoged.currentHealthEstablishment ? this.userLoged.currentHealthEstablishment.serviceDeliveryInstitution._id : undefined,
        resources: [],
        personal: [],
        campaignStatus: (this.campaignStatus.find((c: any) => c.additionalFields.isDefaultValue) || {})._id
      };
      if (campaign) {
        console.log(campaign);
        this.newCampaign = structuredClone(campaign);
        this.newCampaign.canEditFields = this.newCampaign.campaignStatus.code !== CAMPAIGN_STATUS_PENDING_CODE;
        this.newCampaign.__campaignStatus = structuredClone(this.newCampaign.campaignStatus);
        this.newCampaign.campaignStatus = this.newCampaign.campaignStatus._id;
        this.newCampaign.__campaignType = structuredClone(this.newCampaign.campaignType);
        this.newCampaign.campaignType = this.newCampaign.campaignType._id;
        this.newCampaign.startDate = moment(this.newCampaign.startDate).format('YYYY-MM-DD');
        this.newCampaign.finishDate = moment(this.newCampaign.finishDate).format('YYYY-MM-DD');
        this.newCampaign.personal.map((p: any) => {
          p.__medicalStaff = structuredClone(p.medicalStaff);
          p.medicalStaff = p.medicalStaff._id;
        });
        this.newCampaign.resources.map((r: any) => {
          r.__article = structuredClone(r.article);
          r.article = r.article._id;
        });
        this.newCampaign.editing = true;
      }
      this.campaignModal!.config.keyboard = false;
      this.campaignModal!.config.ignoreBackdropClick = true;
      this.campaignModal!.show();
    }
  }

  toggleItem(type: string, resource?: any) {
    if (resource) {
      this.newCampaign[type].splice(this.newCampaign[type].indexOf(resource), 1);
    } else {
      switch (type) {
        case "resources":
          this.newCampaign[type].push({
            index: this.newCampaign[type].length + 1, 
            articlesFiltereds: this.articles.filter((a: any) => !this.newCampaign[type].map((r: any) => r.article).includes(a._id))
          });
          break;
        case 'personal':
          this.newCampaign[type].push({
            index: this.newCampaign[type].length + 1,
            medicalStaffs: this.medicalStaffs.filter((p: any) => !this.newCampaign[type].map((m: any) => m.medicalStaff).includes(p._id))
          });
          break;
        default:
          this.newCampaign[type].push({
            index: this.newCampaign[type].length + 1
          })
          break;
      }
    }
  }

  toggleResponsible(personal: any) {
    personal.isResponsible = !personal.isResponsible;
  }

  validateQuantityOfProduct(resource: any) {
    if (resource.article) {
      let articleSelected = this.articles.find((a: any) => a._id === resource.article._id);
      console.log(articleSelected);
      resource.quantityMax = 0;
      if (articleSelected) {
        // resource.product = articleSelected.product;
        resource.quantityMax = articleSelected.availableStock;
      }
    }
  }

  toggleResource() {
    if (this.articles.filter((a: any) => !this.newCampaign.resources.map((r: any) => r.article._id).includes(a._id)).length) {
      this.newResource = this.newResource ? undefined : {};
      if (this.newResource) {
        this.newResource.articlesFiltereds = this.articles.filter((a: any) => !this.newCampaign.resources.map((r: any) => r.article._id).includes(a._id))
      }
    } else {
      messageAlert("Validación", "No se tienen mas articulos que agregar", "warning");
      return;
    }
  }

  saveResource() {
    let newResource: any = structuredClone(this.newResource);
    delete newResource.articlesFiltereds;
    this.newCampaign.resources.push(newResource);
    this.newResource = undefined;
  }

  deleteResource(resource: any) {
    this.newCampaign.resources.splice(this.newCampaign.resources.indexOf(resource), 1);
  }

  togglePersonal() {
    if (this.medicalStaffs.filter((p: any) => !this.newCampaign.personal.map((m: any) => m.medicalStaff._id).includes(p._id)).length) {
      this.newPersonal = this.newPersonal ? undefined : {};
      if (this.newPersonal) {
        this.newPersonal.medicalStaffs = this.medicalStaffs.filter((p: any) => !this.newCampaign.personal.map((m: any) => m.medicalStaff._id).includes(p._id))
      }
    } else {
      messageAlert("Validación", "No se tiene mas personal que agregar", "warning");
      return;
    }
  }

  savePersonal() {
    let newPersonal: any = structuredClone(this.newPersonal);
    delete newPersonal.medicalStaffs;
    this.newCampaign.personal.push(newPersonal);
    this.newPersonal = undefined;
  }

  deletePersonal(personal: any) {
    this.newCampaign.personal.splice(this.newCampaign.personal.indexOf(personal), 1);
  }

  toggleAssignAllPersonal() {
    this.newCampaign.assignAllPersonal = !this.newCampaign.assignAllPersonal;
    console.log(this.newCampaign.assignAllPersonal);
    if (this.newCampaign.assignAllPersonal) {
      this.newCampaign.personal = this.medicalStaffs.map((m: any) => {return {medicalStaff: m, isResponsible: false}});
    } else {
      this.newCampaign.personal = [];
    }
  }

  async saveCampaign() {
    // console.log(this.newCampaign);
    // return;
    let {serviceDeliveryInstitution, name, campaignType, startDate, finishDate, campaignStatus, usageExternalForm, urlExternalForm } = this.newCampaign;
    let campaign: any = {serviceDeliveryInstitution, name, campaignType, startDate, finishDate, campaignStatus, usageExternalForm, urlExternalForm, resources: [], personal: [] };
    campaign.urlExternalForm = campaign.usageExternalForm ? campaign.urlExternalForm : undefined;
    this.newCampaign.resources.map((r: any) => {
      let {article, quantity} = r;
      campaign.resources.push({article, quantity});
    });

    this.newCampaign.personal.map((p: any) => {
      let {medicalStaff, isResponsible} = p;
      campaign.personal.push({medicalStaff, isResponsible});
    });
    console.log(campaign);

    let body: any = {
      news: [campaign]
    };

    let result: any = await this.Main.setCampaign(body).toPromise();
    if (!result) {
      messageAlert("Error", "Hubo un error al momento de guardar la campaña.", "error");
      return;
    }

    let kardexToInsert: any[] = [];
    let inputTypeSelected = this.inputTypes.find((i: any) => i.code === '002');
    let recordStateSelected = this.recordStates.find((i: any) => i.code === '001');
    this.newCampaign.resources.map((r: any) => {
      let newKardex: any = {
        assignedTo: this.userLoged._id,
        inputType: inputTypeSelected._id,
        product: r.product._id,
        quantity: r.quantity,
        reason: "DISTRIBUCIÓN AUTOMÁTICA",
        status: recordStateSelected._id,
        valueToCalculate: inputTypeSelected.valueToCalculate
      };
      kardexToInsert.push(newKardex);
    });

    let bodyKardex: any = {
      news: kardexToInsert
    };

    let resultKardex: any = await this.Main.setKardex(bodyKardex).toPromise();
    
    if (!resultKardex) {
      messageAlert("Error", "Hubo un error al momento de actualizar el kardex.", "error");
      return;
    }

    messageAlert("Éxito", "Se guardo correctamente la campaña.", "success");
    this.getCampaigns();
    this.getArticles();
    this.toggleCampaign();
  }

  toggleDeleteCampaign(campaign: any) {
    Swal.fire({
      text: `¿Estas seguro de ${campaign.status ? 'Deshabilitar' : 'Habilitar'} la campaña: ${campaign.name.toUpperCase()}?`,
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showCancelButton: true,
      showConfirmButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let updatedCampaign: any = structuredClone(campaign);
        updatedCampaign.status = !updatedCampaign.status;
        delete updatedCampaign._id;
        let result: any = await this.Main.updateCampaign(campaign._id, {updated: updatedCampaign}).toPromise();
        if (!result) {
          messageAlert("Error", "Hubo un error al momento de eliminar la campaña.", "error");
          return;
        }
        messageAlert("Éxito", "Se eliminó correctamente la campaña.", "success");
        this.getCampaigns();
      }
    })
  }

}
