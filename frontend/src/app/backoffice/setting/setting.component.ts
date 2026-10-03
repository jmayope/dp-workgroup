import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import Swal from 'sweetalert2';
import { DAYS, DOMAIN, generateRandomString, messageAlert, parseDate, parseDateToString, TOTAL_DAYS_IN_WEEK } from '../../constants';
import { Router } from '@angular/router';
import moment from 'moment';
import { FilterPipe } from '../../pipes/filter.pipe';


@Component({
  selector: 'app-setting',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    TypeaheadModule,
    FilterPipe
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit {
  
  constructor(
    private Main: MainService,
    private Router: Router
  ) {
    
  }

  @ViewChild("establishmentManagerModal", {static: false}) establishmentManagerModal?: ModalDirective;
  @ViewChild("areaModal", {static: false}) areaModal?: ModalDirective;
  @ViewChild("userModal", {static: false}) userModal?: ModalDirective;
  @ViewChild("userProfileModal", {static: false}) userProfileModal?: ModalDirective;
  @ViewChild("userInfoModal", {static: false}) userInfoModal?: ModalDirective;
  @ViewChild("specialtyModal", {static: false}) specialtyModal?: ModalDirective;
  @ViewChild("profileModal", {static: false}) profileModal?: ModalDirective;

  mainTabs: any[] = [];
  mainItemSelected: any;

  optionSelected: any;
  sectionSelected: any;

  establishment: any;
  currentEstablishmentManager: any;

  establishmentTypes: any[] = [];
  establishmentCategories: any[] = [];
  medicalStaffs: any[] = [];
  medicalStaffsOfService: any[] = [];
  medicalStaffWithoutAccount: any[] = [];
  days: any[] = [];
  availableServices: any[] = [];
  allServiceDeliveryInstitutions: any[] = [];
  serviceDeliveryInstitutions: any[] = [];
  totals: any = {};

  filters: any = {};

  newArea: any;
  
  userLoged: any;
  userSelected: any;

  departments: any[] = [];
  provinces: any[] = [];
  districts: any[] = [];
  statusRecords: any[] = [];
  areas: any[] = [];
  areaTypes: any[] = [];
  allUsers: any[] = [];
  users: any[] = [];
  profiles: any[] = [];
  specialties: any[] = [];
  newUser: any;
  newSpecialty: any;
  newProfile: any;
  ngOnInit(): void {
    this.getInitialData();
    this.getServiceDeliveryInstitutions();
    this.getEstablishmentTypes();
    this.getEstablishmentCategories();
    this.getMedicalStaffs();
    this.getAvailableServices();
    this.getDepartments();
    this.getStatusRecords();
    this.getAreaTypes();
    this.getUsers();
    this.getProfiles();
    this.getSpecialties();
    // const fecha = new Date();
    // const nombreDia = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
    this.days = Array.from({length: TOTAL_DAYS_IN_WEEK }, (_, i) => { 
      return {
        _id: i,
        name: DAYS[i]
      }
    });
    console.log(this.days);
    this.mainTabs = [
      {
        _id: 'main',
        name: 'General',
        selected: false,
        titleSectin: "Configuración del Establecimiento",
        options: [
          {
            _id: "establishment_info",
            icon: "bi bi-building",
            name: "Datos del Establecimiento",
            description: "Información general, dirección, contacto y horarios",
            canSaveInBulk: true,
            sections: [
              {
                _id: "main",
                name: "General"
              },
              {
                _id: "location",
                name: "Ubicación"
              },
              {
                _id: "schedule",
                name: "Horarios"
              },
              {
                _id: "service",
                name: "Servicios"
              },
            ]
          },
          {
            _id: "areas_and_services",
            icon: "bi bi-file-earmark",
            name: "Áreas",
            description: "Gestión de áreas y especialidades"
          },
          // {
          //   _id: "notification",
          //   icon: "bi bi-bell",
          //   name: "Notificaciones",
          //   description: "Configuración de alertas y notificaciones"
          // },
        ]
      },
      {
        _id: 'users',
        name: 'Usuarios y Permisos',
        selected: false,
        titleSectin: "Usuarios y Permisos",
        options: [
          {
            _id: "user_management",
            icon: "bi bi-people",
            name: "Gestión de Usuarios",
            description: "Crear, editar y desactivar usuarios del Sistema"
          },
          {
            _id: "role_and_permission",
            icon: "bi bi-shield",
            name: "Roles y Menus",
            description: "Configuración de roles y menus asignados"
          },
        ]
      },
      // {
      //   _id: 'system',
      //   name: 'Sistema',
      //   selected: false, 
      //   titleSectin: "Configuración del Sistema",
      //   options: [
      //     {
      //       _id: "var_system",
      //       icon: "bi bi-laptop",
      //       name: "Parametros del Sistema",
      //       description: "Configuración General del Sistema"
      //     },
      //     {
      //       _id: "backup_and_restore",
      //       icon: "bi bi-database-gear",
      //       name: "Respaldo y Restauración",
      //       description: "Gestión de copias de Seguridad"
      //     },
      //   ]
      // },
    ];
    this.mainItemSelected = this.mainTabs[0];
    console.log(this.mainItemSelected)
  }

  async getSpecialties() {
    let result: any = await this.Main.getSpecialties({where: {}}).toPromise();
    this.specialties = result;
  }

  async getProfiles() {
    let result: any = await this.Main.getProfiles({where: {}}).toPromise();
    this.profiles = result;
  }

  async getUsers() {
    let result: any = await this.Main.getMedicalStaff({where: {username :{$exists: true}}}).toPromise();
    console.log(result);
    this.allUsers = result;
  }

  async getAreaTypes() {
    let result: any = await this.Main.getTypeList({where: {type: 'AREA-TYPE'}}).toPromise();
    this.areaTypes = result;
  }

  async getStatusRecords() {
    let result: any = await this.Main.getTypeList({where: {type: 'RECORD-STATE'}}).toPromise();
    this.statusRecords = result;
    // this.getAreas();
  }

  async getAreas() {
    let result: any = await this.Main.getAreas({});
    this.areas = result;
    this.totals.areas = this.areas.length;
    this.totals.capacity = this.areas.reduce((m, i) => { return m + (i.capacity || 0)}, 0);
    let statusRecordByDefault = this.statusRecords.find((s: any) => s.additionalFields.isDefaultValue);
    this.totals.activeAreas = this.areas.filter((a: any) => a.status._id === statusRecordByDefault._id).length;
    this.totals.inactiveAreas = this.areas.filter((a: any) => a.status._id !== statusRecordByDefault._id).length;
    if (this.filters.serviceDeliveryInstitution) {
      this.getDataByServiceDeliveryInstitution();
    }
    this.allServiceDeliveryInstitutions.map((s: any) => {
      s.areas = JSON.parse(JSON.stringify(this.areas.filter((a: any) => a.serviceDeliveryInstitution === s._id)));
    })
  }

  async getDepartments() {
    let result: any = await this.Main.getDepartments();
    console.log(result);
    this.departments = result;
  }

  async getInitialData() {
    this.userLoged = await this.Main.getSession();
    console.log(this.userLoged);
    if (!this.userLoged.currentHealthEstablishment && this.userLoged.currentProfile.shortName !== "Administrador") {
      Swal.fire({
        text: 'No tienes un Establecimiento asignado. No puedes continuar',
        icon: 'warning'
      });
      this.Router.navigate(['/backoffice/tablero']);
      return;
    } else {
      if (this.userLoged.currentProfile.shortName !== "Administrador") {
        // this.establishment = {
        //   establishmentManagers: [],
        //   availableServices: []
        // };
        // this.currentEstablishmentManager = this.establishment.establishmentManagers.find((e: any) => e.isCurrent);
        console.log("Aqui entre");
        this.establishment = this.userLoged.currentHealthEstablishment || {};
        console.log(this.establishment);
        this.establishment.editing = true;
        this.filters.serviceDeliveryInstitution = this.establishment.serviceDeliveryInstitution._id;
        this.filters.editable = false;
        this.selectEstablishment()
      }
    }
  }

  async getServiceDeliveryInstitutions() {
    let result: any = await this.Main.getServiceDeliveryInstitutions({}).toPromise();
    this.allServiceDeliveryInstitutions = JSON.parse(JSON.stringify(result));
    this.serviceDeliveryInstitutions = result;
    this.getAreas();

  }

  async getAvailableServices() {
    let result: any = await this.Main.getTypeList({where: { type: 'AVAILABLE-SERVICE'}}).toPromise();
    this.availableServices = result;
  }

  async getEstablishmentTypes() {
    let result: any = await this.Main.getTypeList({where: {type: "ESTABLISHMENT-TYPE"}}).toPromise();
    this.establishmentTypes = result;
  }

  async getEstablishmentCategories() {
    let result: any = await this.Main.getTypeList({where: {type: "ESTABLISHMENT-CATEGORY"}}).toPromise();
    this.establishmentCategories = result;
  }

  async getMedicalStaffs() {
    let result: any = await this.Main.getMedicalStaff({}).toPromise();
    this.medicalStaffs = result;
    this.medicalStaffs.map((m: any) => {
      m.id = m._id;
      m.name = `${m.firstName}`;
    });
  }

  toggleMenu(menu: any) {
    this.mainItemSelected = menu;
  }

  toggleOption(option?: any, reset?: boolean) {
    if (reset) {
      this.optionSelected = undefined;
    } else {
      console.log(option);
      this.optionSelected = option;
      switch (this.optionSelected._id) {
        case 'establishment_info':
          this.toggleSection(this.optionSelected.sections[0]);
          break;
      
        default:
          break;
      }
    }
  }
  
  toggleSection(section: any) {
    this.sectionSelected = section;
    console.log(this.sectionSelected);
    switch (this.sectionSelected._id) {
      case "main":
        if (this.establishment) {
          console.log(this.establishment);
          // OBTENER LOS SELECCIONADOS
          this.availableServices.filter((a: any) => this.establishment.availableServices.map((s: any) => s._id).includes(a._id)).map((a: any) => {
            a.selected = true;
          });
        }
        break;  
      case "schedule":
        this.days.map((d: any) => {
          let dayFound: any = this.establishment.openingHours.find((h: any) => h._id === d._id); 
          if (dayFound) {
            d.available = true;
            d.startHour = dayFound.startHour;
            d.finishHour = dayFound.finishHour;
          }
        })
        
        break;
      default:
        break;
    }
  }

  toggleUser() {
    if (this.userModal?.isShown) {
      this.userModal.hide();
    } else {
      this.userModal!.config.ignoreBackdropClick = true;
      this.userModal!.config.keyboard = false;
      this.userModal!.show();
      this.newUser = {};
      this.medicalStaffWithoutAccount = this.medicalStaffs.filter((m: any) => !m.username);
      console.log(this.medicalStaffWithoutAccount);
    }
  }

  toggleAssignManager() {
    if (this.establishmentManagerModal?.isShown) {
      this.establishmentManagerModal.hide();
    } else {
      this.establishmentManagerModal!.config.keyboard = false;
      this.establishmentManagerModal!.config.ignoreBackdropClick = true;
      this.establishmentManagerModal?.show();
    }
  }

  selectMedicalStaffToManager(e: any) {
    let newItem = JSON.parse(JSON.stringify(e.item));
    newItem.isNew = true;
    this.establishment.establishmentManagers.push(newItem);
    this.establishment.medicalStaff = undefined;
  }

  selectMedicalStaffToAccount(e: any) {
    let newItem = JSON.parse(JSON.stringify(e.item));
    newItem.isNew = true;
    this.newUser.medicalStaff = newItem;
    // this.newUser.push(newItem);
    // this.establishment.medicalStaff = undefined;
  }

  deleteManager(index: number) {
    this.establishment.establishmentManagers.splice(index, 1);
  }

  toggleSetManager(item: any) {
    let currentEstablishmentManager: any = this.establishment.establishmentManagers.find((e: any) => e.isCurrent);
    if (currentEstablishmentManager) {
      if (currentEstablishmentManager._id === item._id) {
        this.establishment.establishmentManagers.map((e: any) => {
          e.isCurrent = false;
        });
        return;
      } else {
        Swal.fire({
          text: 'Ya existe un encargado asignado',
          icon: 'warning'
        });
        return;
      }
    }
    item.isCurrent = !item.isCurrent;
    
  }

  toggleAvailableDay(day: any) {
    if (!this.establishment.openAllDay) {
      let exampleDay: any = this.days.find((d: any) => d.available && d.startHour && d.finishHour);
      console.log(exampleDay);
      if (!exampleDay) {
        if (this.days.filter((d: any) => d.available).length == 0) {
          day.available = !day.available;  
        } else {
          Swal.fire({
            text: 'No completaste el registro anterior',
            icon: 'warning'
          });
          return;
        }
      } else {
        day.available = !day.available;
        if (day.available) {
          day.startHour = exampleDay.startHour;
          day.finishHour = exampleDay.finishHour;
        }
      }
      this.establishment.openingHours = this.days.filter((d: any) => d.available);
    }
  }

  toggleAllOpenDay() {
    this.establishment.openAllDay = !this.establishment.openAllDay;
  }

  toggleAvailableService(service: any) {
    service.selected = !service.selected;
    this.establishment.availableServices = this.availableServices.filter((a: any) => a.selected);
  }

  toggleAreaModal(area?: any) {
    if (this.areaModal?.isShown) {
      this.areaModal.hide();
    } else {
      this.areaModal!.config.keyboard = false;
      this.areaModal!.config.ignoreBackdropClick = true;
      this.newArea = {
        serviceDeliveryInstitution: this.filters.serviceDeliveryInstitution
      };
      if (area) {
        this.newArea = JSON.parse(JSON.stringify(area));
        this.newArea.status = this.newArea.status._id;
        this.newArea.responsible = this.newArea.responsible._id;
        this.newArea.areaType = this.newArea.areaType._id;
        this.newArea.startHour = moment(this.newArea.startHour).format('HH:mm');
        this.newArea.finishHour = moment(this.newArea.finishHour).format('HH:mm');
        this.newArea.editing = true;
      }
      this.areaModal?.show();
    }
  }

  async selectEstablishment() {
    let result: any = await this.Main.getServiceDeliveryInstitutionByID(this.filters.serviceDeliveryInstitution).toPromise();
    this.establishment = result;
    this.establishment.editing = true;
    this.establishment.establishmentManagers = this.establishment.establishmentManagers || [];
    this.establishment.availableServices = this.establishment.availableServices || [];
    this.establishment.currentEstablishmentManager = this.establishment.establishmentManagers.find((m: any) => m.isCurrent);
    this.users = this.users.concat(this.allUsers.filter((u: any) => u.healthEstablisments.map((h: any) => h.serviceDeliveryInstitution._id).includes(this.filters.serviceDeliveryInstitution)));
    console.log(this.establishment);
    if (this.establishment.availableServices.length) {
      this.availableServices.map((a: any) => {
        let serviceFound: any = this.establishment.availableServices.find((x: any) => x._id === a._id);
        if (serviceFound) {
          a.selected = true;
        } else {
          a.selected = false;
        }
      });
    }
    if (this.establishment.department) {
      this.selectDepartment(true);
    }
  }

  addUser() {
    console.log(this.newUser);
    let medicalStaffFound: any = this.medicalStaffs.find((m: any) => m._id === this.newUser.medicalStaff._id);
    console.log(medicalStaffFound);
    Swal.fire({
      text: '¿Estas seguro de agregar?',
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false,
      showCancelButton: true, 
      showConfirmButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let body: any = JSON.parse(JSON.stringify(this.newUser.medicalStaff));
        body.username = `${body.code}@${DOMAIN}`;
        body.password = generateRandomString(6);
        delete body._id;
        delete body.id;
        let result: any = await this.Main.updateMedicalStaff(this.newUser.medicalStaff._id, {updated: body}).toPromise();
        if (!result) {
          Swal.fire({
            text: 'Hubo un error al actualizar el Personal Medico',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se realizo la actualización correctamente',
          icon: 'success'
        });
        this.getUsers();
        this.toggleUser();
      }
    })

  }

  saveArea() {
    Swal.fire({
      text: '¿Estas seguro de guardar los cambios?',
      icon: 'question',
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let result: any;
        let now = moment();
        now.set({hour: this.newArea.startHour.split(":")[0], minute: this.newArea.startHour.split(":")[1]});
        this.newArea.startHour = now;

        now = moment();
        now.set({hour: this.newArea.finishHour.split(":")[0], minute: this.newArea.finishHour.split(":")[1]});
        this.newArea.finishHour = now;
        if (!this.newArea.editing) {
          let statusRecordByDefault: any = this.statusRecords.find((s: any) => s.additionalFields.isDefaultValue);
          this.newArea.status = statusRecordByDefault._id;
          result = await this.Main.setArea({news: [this.newArea]}).toPromise();
        } else {
          let body = JSON.parse(JSON.stringify(this.newArea));
          delete body._id;
          result = await this.Main.updateArea(this.newArea._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error al guardar los cambios del Area',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se guardaron los cambios correctamente',
          icon: 'success'
        });
        this.getServiceDeliveryInstitutions();
        this.toggleAreaModal();
      }
    })
  }

  toggleMedicalStaffModal() { }

  saveEstablishment(comesFromAModal?: boolean) {
    Swal.fire({
      text: '¿Estas seguro de guardar los cambios?',
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let result:any;
        if (!this.establishment.editing) {
          result = await this.Main.setServiceDeliveryInstitution({news: [this.establishment]}).toPromise();
        } else {
          let body = JSON.parse(JSON.stringify(this.establishment));
          delete body._id;
          result = await this.Main.updateServiceDeliveryInstitution(this.establishment._id, {updated: body}).toPromise();
        }
        if (!result) {
          Swal.fire({
            text: 'Hubo un error al guardar los cambios del Establecimiento',
            icon: 'error'
          });
          return;
        }
        Swal.fire({
          text: 'Se guardaron los cambios correctamente',
          icon: 'success'
        });
        if (comesFromAModal) {
          this.toggleAssignManager();
          this.selectEstablishment();
        }
      }
    })
  }

  async selectDepartment(isExists: boolean = false) {
    if (!isExists) {
      this.establishment.province = undefined;
      this.establishment.district = undefined;
    }
    console.log(this.establishment.department);
    let departmentFound: any = this.departments.find((d: any) => d.codigo_ubigeo === this.establishment.department);
    if (departmentFound) {
      let result: any = await this.Main.getProvinceByDepartmentId(departmentFound.id_ubigeo);
      console.log(result);
      this.provinces = result;
      if (isExists) {
        this.selectProvince(true);
      }
    }
  }

  async selectProvince(isExists: boolean = false) {
    if (!isExists) {
      this.establishment.district = undefined;
    }
    let provinceFound: any = this.provinces.find((p: any) => p.codigo_ubigeo === this.establishment.province);
    if (provinceFound) {
      let result: any = await this.Main.getDistrictByProvinceId(provinceFound.id_ubigeo);
      console.log(result);
      this.districts = result;
      if (isExists) {
        this.selectDistrict();
      }
    }
  }

  selectDistrict(isExists: boolean = false) {
    this.establishment.ubigeo = `${this.establishment.department}${this.establishment.province}${this.establishment.district}`;
    // if (!isExists) {
    // }
  }

  toggleItem(modal: any, type: string, item?: any) {
    if (modal.isShown) {
      modal.hide()
    } else {
      switch (type) {
        case "specialty":
          this.newSpecialty = {};
          break;
        case "profile":
          this.newProfile = {};
          break;
        case "user":
          this.newUser = {};
          break;
        case "user-profile":
        case "user-info":
          this.newUser = {};
          this.serviceDeliveryInstitutions = JSON.parse(JSON.stringify(this.allServiceDeliveryInstitutions));
          break;
        default:
          break;
      }
      if (item) {
        switch (type) {
          case "specialty":
            this.newSpecialty = JSON.parse(JSON.stringify(item));
            this.newSpecialty.editing = true;
            break;
          case "profile":
            this.newProfile = JSON.parse(JSON.stringify(item));
            this.newProfile.specialtyObject = this.newProfile.specialty;
            if (this.newProfile.specialty) {
              this.newProfile.specialty = this.newProfile.specialtyObject._id;
            }
            this.newProfile.editing = true;
            break;
          case "user":
          case "user-info":
            this.newUser = JSON.parse(JSON.stringify(item));
            this.newUser.editing = true;
            this.serviceDeliveryInstitutions = JSON.parse(JSON.stringify(this.allServiceDeliveryInstitutions));
            console.log(this.serviceDeliveryInstitutions);
            if (this.newUser.healthEstablisments) {
              this.newUser.healthEstablisments.map((h: any) => {
                let serviceSelected: any = this.serviceDeliveryInstitutions.find((s: any) => s._id === h.serviceDeliveryInstitution._id);
                console.log(serviceSelected);
                console.log(this.newUser);
                if (serviceSelected) {
                  serviceSelected.selected = true;
                  serviceSelected.startDate = h.startDate ? parseDateToString(h.startDate) : undefined;
                  serviceSelected.finishDate = h.finishDate ? parseDateToString(h.finishDate) : undefined;
                  serviceSelected.areas.map((a: any) => {
                    a.selected = this.areas.filter((x: any) => x._id === a._id).map((x: any) => x.collaboratorsInArea).flat().includes(this.newUser._id);
                  })
                }
              })
            }
            console.log(this.newUser);
            break;
          case "user-profile":
            this.userSelected = JSON.parse(JSON.stringify(item));
            break;
          default:
            break;
        }
      }
      modal.config.keyboard = false;
      modal.config.ignoreBackdropClick = true;
      modal.show();
    }
  }

  async saveItem(modal: any, type: string) {
    let body: any = {};
    let result: any;
    switch (type) {
      case "specialty":
        if (!this.newSpecialty.editing) {
          body = [this.newSpecialty];
          result = await this.Main.setSpecialty({news: body}).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newSpecialty));
          delete body.id;
          delete body._id;
          result = await this.Main.updateSpecialty(this.newSpecialty._id, {updated: body}).toPromise();
        }
        break;
      case "profile":
        if (!this.newProfile.editing) {
          body = [this.newProfile];
          result = await this.Main.setProfile({news: body}).toPromise();
        } else {
          body = JSON.parse(JSON.stringify(this.newProfile));
          delete body.id;
          delete body._id;
          result = await this.Main.updateProfile(this.newProfile._id, {updated: body}).toPromise();
        }
        break;
      case 'user-profile':
        body = JSON.parse(JSON.stringify(this.userSelected));
        delete body.id;
        delete body._id;
        result = await this.Main.updateMedicalStaff(this.userSelected._id, {updated: body}).toPromise();
        break;
      case 'user-info':
        console.log(this.newUser);
        console.log(this.serviceDeliveryInstitutions);
        this.newUser.healthEstablisments = this.serviceDeliveryInstitutions.filter((s: any) => s.selected).map((s: any) => {
          return {
            serviceDeliveryInstitution: s._id,
            startDate: s.startDate,
            finishDate: s.finishDate
          };
        });
        body = JSON.parse(JSON.stringify(this.newUser));
        delete body.id;
        delete body._id;
        result = await this.Main.updateMedicalStaff(this.newUser._id, {updated: body}).toPromise();
        // // let bodyArea: any = this.areas.filter((a: any) => a.selected).map()
        
        for (let index = 0; index < this.areas.length; index++) {
          let areaUpdated: any = this.areas[index];
          let bodyUpdateArea: any = JSON.parse(JSON.stringify(areaUpdated));
          delete bodyUpdateArea.id;
          delete bodyUpdateArea._id;
          let resultArea: any = await this.Main.updateArea(areaUpdated._id, {updated: bodyUpdateArea}).toPromise();
          console.log(resultArea);
        }
        
        break;
      default:
        break;
    }
    if (!result) {
      messageAlert("Error", `Hubo un error al guardar los cambios de la Especialidad`, "error");
      return;
    }
    messageAlert("Éxito", "Se guardaron los cambios", "success");
    this.toggleItem(modal, type);
    this.ngOnInit();
  }

  // toggleSpecialty(item?: any) {
  //   if (this.specialtyModal?.isShown) {
  //     this.specialtyModal.hide();
  //   } else {
  //     this.
  //   }
  // }

  toggleProfile(parent: any, item?: any) {
    if (item) {
      parent.profiles.splice(parent.profiles.indexOf(item), 1);
    } else {
      parent.profiles.push({});
    }
  }

  verifyProfile(parent: any, itemToVerify: any) {
    if (parent.profiles.filter((p: any) => p._id === itemToVerify._id).length > 1) {
      messageAlert("Validación", "No puedes agregar el mismo perfil a este usuario", "warning");
      parent.profiles[parent.profiles.indexOf(itemToVerify)] = {};
      return;
    }
  }

  async getDataByServiceDeliveryInstitution() {
    if (this.filters.serviceDeliveryInstitution) {
      console.log(this.filters.serviceDeliveryInstitution);
      let resultAreas: any = await this.Main.getAreas({where: {serviceDeliveryInstitution: this.filters.serviceDeliveryInstitution}});
      console.log(resultAreas);
      this.areas = resultAreas;
      console.log(this.medicalStaffs);
      this.medicalStaffsOfService = this.medicalStaffs.filter((m: any) => m.healthEstablisments && m.healthEstablisments.map((h: any) => h.serviceDeliveryInstitution._id).includes(this.filters.serviceDeliveryInstitution));
      console.log(this.medicalStaffsOfService);
    }
  }

  toggleSelect(item: any) {
    item.selected = !item.selected;
    let areaFound: any = this.areas.find((a: any) => a._id === item._id);
    if (item.selected) {
      console.log(areaFound)
      if (!areaFound.collaboratorsInArea.includes(this.newUser._id)) {
        areaFound.collaboratorsInArea.push(this.newUser._id);
      }
    } else {
      areaFound.collaboratorsInArea.splice(areaFound.collaboratorsInArea.indexOf(this.newUser._id), 1);
    }
    console.log(areaFound);
  }

}
