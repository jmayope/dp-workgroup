import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URI, messageAlert, TOKEN_NAME } from '../constants';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private Http: HttpClient
  ) { }

  uri: string = API_URI;

  // SESSION
  setSession(user: any) {
    sessionStorage.setItem(TOKEN_NAME, JSON.stringify(user));
    return true;
  }

  getSession() {
    return JSON.parse(sessionStorage.getItem(TOKEN_NAME) || '')
  }

  getToken() {
    return JSON.parse(sessionStorage.getItem(TOKEN_NAME) || '{}').token;
  }

  destroySession() {
    sessionStorage.removeItem(TOKEN_NAME);
    return true;
  }

  // AUTHENTICATION
  
  login(body: any) {
    return this.Http.post(`${this.uri}/auth/login`, body);
  }

  // GENERALS
  private basePathStatics = 'jsons';
  async getDepartments() {
    try {
      let result: any = await this.Http.get(`${this.basePathStatics}/departments.json`).toPromise();
      return result || [];
    } catch (error: any) {
      messageAlert(null, `Error al retornar los deparmentos + ${error.message}`, 'error');
    }
  }

  async getProvinceByDepartmentId(departmentId: string) {
    try {
      let result: any = await this.Http.get(`${this.basePathStatics}/provinces.json`).toPromise();
      return result[departmentId];
    } catch (error: any) {
      messageAlert(null, `Error al retornar los provincias + ${error.message}`, 'error');
    }
  }

  async getDistrictByProvinceId(provinceId: string) {
    try {
      let result: any = await this.Http.get(`${this.basePathStatics}/districts.json`).toPromise();
      return result[provinceId];
    } catch (error: any) {
      messageAlert(null, `Error al retornar los distritos + ${error.message}`, 'error');
    }
  }

  // AREAS
  async getAreas(body: any) {
    try {
      let result: any = await this.Http.post(`${this.uri}/area/where`, body).toPromise();
      return result || [];
    } catch (error: any) {
      messageAlert(null, `Error al retornar las areas + ${error.message}`, 'error');
    }
  }
  
  setArea(body: any) {
    return this.Http.post(`${this.uri}/area`, body);
  }

  updateArea(id: any, body: any) {
    return this.Http.put(`${this.uri}/area/${id}`, body);
  }

  deleteArea(id: any) {
    return this.Http.delete(`${this.uri}/area/${id}`);
  }


  // HEALTH NETWORK
  getHealthNetworks(body: any) {
    return this.Http.post(`${this.uri}/health-network/where`, body);
  }
  
  setHealthNetwork(body: any) {
    return this.Http.post(`${this.uri}/health-network`, body);
  }

  updateHealthNetwork(id: any, body: any) {
    return this.Http.put(`${this.uri}/health-network/${id}`, body);
  }

  deleteHealthNetwork(id: any) {
    return this.Http.delete(`${this.uri}/health-network/${id}`);
  }

  // SERVICE DELIVERY INSTITUTION
  getServiceDeliveryInstitutions(body: any) {
    return this.Http.post(`${this.uri}/service-delivery-institution/where`, body);
  }

  getServiceDeliveryInstitutionByID(id: any) {
    return this.Http.get(`${this.uri}/service-delivery-institution/${id}`);
  }
  
  setServiceDeliveryInstitution(body: any) {
    return this.Http.post(`${this.uri}/service-delivery-institution`, body);
  }

  updateServiceDeliveryInstitution(id: any, body: any) {
    return this.Http.put(`${this.uri}/service-delivery-institution/${id}`, body);
  }

  deleteServiceDeliveryInstitution(id: any) {
    return this.Http.delete(`${this.uri}/service-delivery-institution/${id}`);
  }

  // PROFILE
  getProfiles(body: any) {
    return this.Http.post(`${this.uri}/profile/where`, body);
  }
  
  setProfile(body: any) {
    return this.Http.post(`${this.uri}/profile`, body);
  }

  updateProfile(id: any, body: any) {
    return this.Http.put(`${this.uri}/profile/${id}`, body);
  }

  // GROWTH STAGE
  getGrowthStages(body: any) {
    return this.Http.post(`${this.uri}/growth-stage/where`, body);
  }
  
  setGrowthStage(body: any) {
    return this.Http.post(`${this.uri}/growth-stage`, body);
  }

  updateGrowthStage(id: any, body: any) {
    return this.Http.put(`${this.uri}/growth-stage/${id}`, body);
  }

  deleteGrowthStage(id: any) {
    return this.Http.delete(`${this.uri}/growth-stage/${id}`);
  }

  // SPECIALTY
  getSpecialties(body: any) {
    return this.Http.post(`${this.uri}/specialty/where`, body);
  }

  setSpecialty(body: any) {
    return this.Http.post(`${this.uri}/specialty`, body);
  }

  updateSpecialty(id: any, body: any) {
    return this.Http.put(`${this.uri}/specialty/${id}`, body);
  }

  deleteSpecialty(id: any) {
    return this.Http.delete(`${this.uri}/specialty/${id}`);
  }


  // SPECIALTY CONTROL
  getSpecialtyControls(body: any) {
    return this.Http.post(`${this.uri}/specialty-control/where`, body);
  }

  setSpecialtyControl(body: any) {
    return this.Http.post(`${this.uri}/specialty-control`, body);
  }

  updateSpecialtyControl(id: any, body: any) {
    return this.Http.put(`${this.uri}/specialty-control/${id}`, body);
  }

  deleteSpecialtyControl(id: any) {
    return this.Http.delete(`${this.uri}/specialty-control/${id}`);
  }

  // SPECIALTY PROCESS
  getSpecialtyProcesses(body: any) {
    return this.Http.post(`${this.uri}/specialty-process/where`, body);
  }

  setSpecialtyProcess(body: any) {
    return this.Http.post(`${this.uri}/specialty-process`, body);
  }

  updateSpecialtyProcess(id: any, body: any) {
    return this.Http.put(`${this.uri}/specialty-process/${id}`, body);
  }

  deleteSpecialtyProcess(id: any) {
    return this.Http.delete(`${this.uri}/specialty-process/${id}`);
  }

  // MENU

  setMenu(body: any) {
    return this.Http.post(`${this.uri}/menu`, body);
  }

  deleteMenu(id: string) {
    return this.Http.delete(`${this.uri}/menu/${id}`);
  }

  updateMenu(id: any, body: any) {
    return this.Http.put(`${this.uri}/menu/${id}`, body);
  }

  getMenus() {
    return this.Http.post(`${this.uri}/menu/where`, {});
  }

  getMenuGeneric() {
    return this.Http.post(`${this.uri}/menu/where`, {where: {identifier: null}});
  }

  getMenuByProfile(body: any, options?: any) {
    return this.Http.post(`${this.uri}/profile-menu/where`, body, {params: options || {}});
  }
  
  // PATIENT

  getPatientQuantity(body: any) {
    return this.Http.post(`${this.uri}/patient/quantity`, body);
  }

  getPatients(body: any) {
    return this.Http.post(`${this.uri}/patient/where`, body);
  }

  setPatient(body: any) {
    return this.Http.post(`${this.uri}/patient`, body);
  }

  updatePatient(id: any, body: any) {
    return this.Http.put(`${this.uri}/patient/${id}`, body);
  }

  deletePatient(id: any) {
    return this.Http.delete(`${this.uri}/patient/${id}`);
  }  

  exportPatients(body: any) {
    return this.Http.post(`${this.uri}/patient/export`, body);
  }

  // MEDICAL HISTORY

  getMedicalHistory(body: any) {
    return this.Http.post(`${this.uri}/medical-history/where`, body);
  }

  setMedicalHistory(body: any) {
    return this.Http.post(`${this.uri}/medical-history`, body);
  }

  updateMedicalHistory(id: any, body: any) {
    return this.Http.put(`${this.uri}/medical-history/${id}`, body);
  }

  deleteMedicalHistory(id: any) {
    return this.Http.delete(`${this.uri}/medical-history/${id}`);
  }

  // MIGRATE

  uploadFile(formData: FormData) {
    return this.Http.post(`${this.uri}/patient/migrate`, formData);
  }

  // ANTHROPOMETRIC MEASUREMENTS
  getAnthropometricMeasurement(body: any) {
    return this.Http.post(`${this.uri}/anthropometric-measurement/where`, body);
  }

  setAnthropometricMeasurement(body: any) {
    return this.Http.post(`${this.uri}/anthropometric-measurement`, body);
  }

  updateAnthropometricMeasurement(id: any, body: any) {
    return this.Http.put(`${this.uri}/anthropometric-measurement/${id}`, body);
  }

  deleteAnthropometricMeasurement(id: any) {
    return this.Http.delete(`${this.uri}/anthropometric-measurement/${id}`);
  }

  // VACCINES
  getArticle(body: any) {
    return this.Http.post(`${this.uri}/product/where`, body);
  }

  getArticleQuantity(body: any) {
    return this.Http.post(`${this.uri}/product/quantity`, body);
  }

  setArticle(body: any) {
    return this.Http.post(`${this.uri}/product`, body);
  }

  updateArticle(id: any, body: any) {
    return this.Http.put(`${this.uri}/product/${id}`, body);
  }

  deleteArticle(id: any) {
    return this.Http.delete(`${this.uri}/product/${id}`);
  }

  // DOSES
  getDose(body: any) {
    return this.Http.post(`${this.uri}/dose/where`, body);
  }

  setDose(body: any) {
    return this.Http.post(`${this.uri}/dose`, body);
  }

  updateDose(id: any, body: any) {
    return this.Http.put(`${this.uri}/dose/${id}`, body);
  }

  deleteDose(id: any) {
    return this.Http.delete(`${this.uri}/dose/${id}`);
  }

  // KARDEX
  getKardexMasters(body: any) {
    return this.Http.post(`${this.uri}/kardex-master/where`, body);
  }

  getKardexMastersQuantity(body: any) {
    return this.Http.post(`${this.uri}/kardex-master/quantity`, body);
  }
  
  setKardexMaster(body: any) {
    return this.Http.post(`${this.uri}/kardex-master`, body);
  }

  updateKardexMaster(id: any, body: any) {
    return this.Http.put(`${this.uri}/kardex-master/${id}`, body);
  }

  deleteKardexMaster(id: any) {
    return this.Http.delete(`${this.uri}/kardex-master/${id}`);
  }

  // KARDEX
  getKardexLastRecords(body: any) {
    return this.Http.post(`${this.uri}/kardex/last-records`, body);
  }

  getKardexQuantity(body: any) {
    return this.Http.post(`${this.uri}/kardex/quantity`, body);
  }
  
  getKardex(body: any) {
    return this.Http.post(`${this.uri}/kardex/where`, body);
  }

  setKardex(body: any) {
    return this.Http.post(`${this.uri}/kardex`, body);
  }

  updateKardex(id: any, body: any) {
    return this.Http.put(`${this.uri}/kardex/${id}`, body);
  }

  deleteKardex(id: any) {
    return this.Http.delete(`${this.uri}/kardex/${id}`);
  }

  // KARDEX
  getTypeList(body: any) {
    return this.Http.post(`${this.uri}/type-list/where`, body);
  }

  setTypeList(body: any) {
    return this.Http.post(`${this.uri}/type-list`, body);
  }

  updateTypeList(id: any, body: any) {
    return this.Http.put(`${this.uri}/type-list/${id}`, body);
  }

  deleteTypeList(id: any) {
    return this.Http.delete(`${this.uri}/type-list/${id}`);
  }

  // KARDEX
  getMedicalStaff(body: any) {
    return this.Http.post(`${this.uri}/medical-staff/where`, body);
  }

  setMedicalStaff(body: any) {
    return this.Http.post(`${this.uri}/medical-staff`, body);
  }

  updateMedicalStaff(id: any, body: any) {
    return this.Http.put(`${this.uri}/medical-staff/${id}`, body);
  }

  deleteMedicalStaff(id: any) {
    return this.Http.delete(`${this.uri}/medical-staff/${id}`);
  }

  // KARDEX
  getCampaign(body: any) {
    return this.Http.post(`${this.uri}/campaign/where`, body);
  }

  setCampaign(body: any) {
    return this.Http.post(`${this.uri}/campaign`, body);
  }

  updateCampaign(id: any, body: any) {
    return this.Http.put(`${this.uri}/campaign/${id}`, body);
  }

  deleteCampaign(id: any) {
    return this.Http.delete(`${this.uri}/campaign/${id}`);
  }

}
