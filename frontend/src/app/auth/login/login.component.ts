import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { COLLECTIONS, generateRandomString, handleAlphanumeric, handleLetter, handleNumber, messageAlert } from '../../constants';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(
    private Main: MainService,
    private Router: Router,
    private Supabase: SupabaseService
  ) {}

  credentials: any = {}
  hasProfiles: boolean = false;
  usageSupabase: boolean = true;
  userLoged: any;
  tabs: any[] = [
    { id: 1, name: "Iniciar Sesión"},
    { id: 2, name: "Registro"},
  ];
  tabByDefault: any = this.tabs[0];
  documentTypes: any[] = [
    {_id: "DNI", name: "Documento Nacional de Identidad", maxLength: 8},
    {_id: "RUC", name: "Registro Único de Contribuyente", maxLength: 11},
  ];
  tabSelected: any;
  showPassword: boolean = false;
  newUser: any = {};
  registering: boolean = false;
  isForgotPassword: boolean = false;
  recovering: boolean = false;
  forgotPassword: any = {};
  administratorProfile: any;

  ngOnInit() {
    this.tabSelected = this.tabs[0];
    this.newUser = {};
    this.getInitialData();
  }

  async getInitialData() {
    let resultAdministratorProfile: any = await firstValueFrom(this.Supabase.select(COLLECTIONS.PROFILES, {filters: {short_name: 'ADMINISTRADOR'}}));
    if (!resultAdministratorProfile.length) {
      messageAlert("Aviso", "No se tiene registrado el perfil administrador", "warning");
      return;
    }
    this.administratorProfile = resultAdministratorProfile[0];
  }

  toggleTab(tab: any) {
    this.tabSelected = tab;
  }

  async login() {
    let result: any;
    if (this.usageSupabase) {
      let resultUser: any = await firstValueFrom(this.Supabase.select(COLLECTIONS.MEDICAL_STAFF, {filters: this.credentials}));
      console.log(resultUser);
      result = resultUser[0];
      let resultProfileMedicalStaffs = await firstValueFrom(this.Supabase.select(COLLECTIONS.MEDICAL_STAFF_PROFILES, {filters: {medical_staff_id: result.id}}));
      console.log(resultProfileMedicalStaffs);
      console.log(...new Set(resultProfileMedicalStaffs.map((p: any) => p.profile_id)));
      let resultProfiles: any = await firstValueFrom(this.Supabase.select(COLLECTIONS.PROFILES, {filters: {id: [...new Set(resultProfileMedicalStaffs.map((p: any) => p.profile_id))]}}))
      result.profiles = resultProfileMedicalStaffs;
      result.profiles.map((pm: any) => {
        pm.profile = resultProfiles.find((p: any) => p.id === pm.profile_id);
      });
      result.changedPassword = result.changed_password;
      result.healthEstablisments = result.healthEstablisments || [];
    } else {
      console.log('iniciar Sesión')
      result = await firstValueFrom(this.Main.login(this.credentials));
      console.log(result);
      if (!result) {
        Swal.fire({
          text: 'Las credenciales son incorrectas',
          icon: 'error'
        });
        this.credentials = {};
        return;
      }
      this.userLoged = result;
      this.Main.setSession(this.userLoged);
      if (!result.changedPassword) {
        Swal.fire({
          icon: 'success',
          text: 'Necesitas cambiar la contraseña',
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "Continuar",
          cancelButtonText: "No"
        }).then(async (choice) => {
          if (choice.isConfirmed) {
            this.Router.navigate(['/autenticacion/cambiar-clave']);
          } else {
            this.ngOnInit();
          }
        })
        return;
      }
    }
    console.log(result);
    if (!result.profiles.length) {
      Swal.fire({
        text: 'No tienes ningun perfil asignado',
        icon: 'info'
      });
      return;
    }
    console.log(result.profiles.map((p: any) => p.profile.name.toLowerCase()));
    console.log(result.profiles.map((p: any) => p.profile.name.toLowerCase()).includes('administrador'));
    result.isAdmin = result.profiles.some((p: any) => p.profile.name.toLowerCase().includes('administrador'));
    // COMENTARIO
    console.log(result);
    if (result.isAdmin) {
      result.currentProfile = result.profiles[0];
      this.Main.setSession(result);
      this.Router.navigate(['backoffice/tablero']);
    } else {
      if (result.healthEstablisments.length == 1) {
        result.currentHealthEstablishment = result.healthEstablisments[0];
        let profilesOfHealthEstablishment = result.profiles.filter((p: any) => p.serviceDeliveryInstitution === result.currentHealthEstablishment.serviceDeliveryInstitution._id);
        if (profilesOfHealthEstablishment.length === 1) {
          result.currentProfile = profilesOfHealthEstablishment[0];
          this.Main.setSession(result);
          this.Router.navigate(['backoffice/tablero']);
        } else {
          this.Main.setSession(result);
          this.Router.navigate(['autenticacion/seleccionar-perfil']);
        }
      } else {
        this.Main.setSession(result);
        this.Router.navigate(['autenticacion/seleccionar-establecimiento']);
      }
    }
  }
  
  toggleSelectProfile(profile: any) {
    this.userLoged.currentProfile = profile;
  }

  goToDashboard() {
    this.Main.setSession(this.userLoged);
    this.Router.navigate(['backoffice/tablero']);
  }  

  selectDocumentType() {
    this.newUser.code = undefined;
    let documentTypeSelected = this.documentTypes.find((dt: any) => dt._id === this.newUser.documentType);
    if (documentTypeSelected) {
      this.newUser.documentNumberLength = documentTypeSelected.maxLength;
    }
  }

  onlyAlphanumeric(event: any) {
      handleAlphanumeric(event);
  }

  onlyLetter(event: any) {
    handleLetter(event);
  }

  onlyNumber(event: any) {
    handleNumber(event);
  }

  resetSearch() {
    this.newUser.searched = false;
    this.newUser.code = undefined;
    this.newUser.firstName = undefined;
    this.newUser.lastName = undefined;
    this.newUser.email = undefined;
  }

  async validateDocument() {
    let medicalStaffExistsResult: any;
    if (this.usageSupabase) {
      medicalStaffExistsResult = await firstValueFrom(this.Supabase.select(COLLECTIONS.MEDICAL_STAFF, {filters: {code: this.newUser.code}}));
      console.log(medicalStaffExistsResult);

    } else {
      console.log(this.newUser);
      medicalStaffExistsResult = await firstValueFrom(this.Main.getMedicalStaff({where: {code: this.newUser.code}}));
      console.log(medicalStaffExistsResult);
    }

    if (medicalStaffExistsResult.length) {
      messageAlert("Validación", "Este DNI ya esta siendo usado por otro usuario.", "warning");
      return;
    } 
    let resultRENIEC: any;
    switch (this.newUser.documentType) {
      case "DNI":
        resultRENIEC = await firstValueFrom(this.Main.findDNI(this.newUser.code));
        if (!resultRENIEC.success) {
          messageAlert("Error de Conexión", resultRENIEC.message, "error");
          return;
        }
        this.newUser.firstName = resultRENIEC.nombres;
        this.newUser.lastName = `${resultRENIEC.apellidoPaterno} ${resultRENIEC.apellidoMaterno}`
        this.newUser.searched = true;
        break;
      case "RUC":
        resultRENIEC = await firstValueFrom(this.Main.findRUC(this.newUser.code));
        console.log(resultRENIEC);
        if (!resultRENIEC.estado) {
          messageAlert("Error de Conexión", resultRENIEC.message, "error");
          return;
        }
        this.newUser.businessName = resultRENIEC.razonSocial;
        this.newUser.businessAddress = resultRENIEC.direccion;
        this.newUser.businessDepartment = resultRENIEC.departamento;
        this.newUser.businessProvince = resultRENIEC.provincia;
        this.newUser.businessDistrict = resultRENIEC.distrito;
        this.newUser.businessUbigeo = resultRENIEC.ubigeo;
        this.newUser.searched = true;
        break;
      default:
        break;
    }
  }

  async register() {
    if (this.newUser.password !== this.newUser.confirmPassword) {
      Swal.fire({
        icon: 'warning',
        text: 'Las contraseñas no son iguales. Verifique por favor.',
        allowEscapeKey: false,
        allowOutsideClick: false
      });
      return;
    }
    this.registering = true;

    let newUser = structuredClone(this.newUser);
    newUser.status = false;
    newUser.username = newUser.email;
    newUser.password = generateRandomString(8);
    
    delete newUser.confirmPassword;
    delete newUser.acceptTerms;
    let body: any = {
      news: [newUser]
    };
    let resultRegister: any;
    if (this.usageSupabase) {
      console.log(newUser);
      newUser.first_name = newUser.firstName;
      newUser.last_name = newUser.lastName;
      newUser.document_type = newUser.documentType;
      newUser.business_name = newUser.businessName;
      newUser.business_address = newUser.businessAddress;
      newUser.changed_password = false;
      newUser.is_entity = newUser.isEntity;

      delete newUser.documentNumberLength;
      delete newUser.firstName;
      delete newUser.lastName;
      delete newUser.documentType;

      let resultDeliveryInstitution: any;
      let deliveryInstitutionCreated: any;
      if (newUser.businessName) {

        let newDeliveryInstitution: any = {
          name: newUser.businessName,
          ruc: newUser.code,
          description: newUser.businessName,
          address: newUser.businessAddress,
          department: newUser.businessDepartment,
          province: newUser.businessProvince,
          district: newUser.businessDistrict,
          ubigeo: newUser.businessUbigeo,
          email: newUser.email
        };

        resultDeliveryInstitution = await firstValueFrom(this.Supabase.insert(COLLECTIONS.SERVICE_DELIVERY_INSTITUTIONS, newDeliveryInstitution));
        console.log(resultDeliveryInstitution);
        deliveryInstitutionCreated = resultDeliveryInstitution[0];

      }

      delete newUser.businessName;
      delete newUser.businessAddress;
      delete newUser.searched;
      delete newUser.businessDepartment;
      delete newUser.businessProvince;
      delete newUser.businessDistrict;
      delete newUser.businessUbigeo;

      resultRegister = await firstValueFrom(this.Supabase.insert(COLLECTIONS.MEDICAL_STAFF, newUser));
      if (!resultRegister.length) {
        messageAlert("Error", "Hubo un error al momento de crear el Personal de Salud", "error");
        return;
      }
      let medicalStaffCreated: any = resultRegister[0];
      console.log(resultRegister);

      if (deliveryInstitutionCreated) {
        let newMedicalStaffProfile: any = {
          medical_staff_id: medicalStaffCreated.id,
          profile_id: this.administratorProfile.id,
          service_delivery_institution_id: deliveryInstitutionCreated.id,
          status: true
        };

        let resultMedicalStaffProfile: any = await firstValueFrom(this.Supabase.insert(COLLECTIONS.MEDICAL_STAFF_PROFILES, newMedicalStaffProfile));
        console.log(resultMedicalStaffProfile);

      }
      this.registering = false;
      console.log(resultRegister);
    } else {
      console.log(this.newUser);
      resultRegister = await firstValueFrom(this.Main.setMedicalStaff(body));
      console.log(resultRegister);
    }

    this.registering = false;
    if (resultRegister.message) {
      Swal.fire({
        icon: 'error',
        text: resultRegister.message
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      text: 'Se registro correctamente el Usuario. Revisa tu correo'
    });
    this.ngOnInit();
  }

  toggleForgotPassword() {
    this.isForgotPassword = !this.isForgotPassword;
  }

  async recoverPassword() {
    if (this.recovering) return;
    this.recovering = true;

    let userFound: any = await firstValueFrom(this.Supabase.select(COLLECTIONS.MEDICAL_STAFF, {filters: {email: this.forgotPassword.email}}));
    console.log(userFound);


    // let resultRecovering: any = await firstValueFrom(this.Supabase.update(COLLECTIONS.MEDICAL_STAFF, ))
  }

}
