import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { COLLECTIONS, generateRandomString, handleAlphanumeric, handleLetter, handleNumber, INTENT_MAX_PASSWORD, loadingAlert, messageAlert } from '../../constants';
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
  usageSupabase: boolean = false;
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
  contadorIntentos: number = 0;
  isUnlockAccount: boolean = false;
  unlockCode: any = {};

  ngOnInit() {
    this.tabSelected = this.tabs[0];
    this.newUser = {};
    this.getInitialData();
  }

  async getInitialData() {
    let resultAdministratorProfile: any;
    if (this.usageSupabase) {
      resultAdministratorProfile = await firstValueFrom(this.Supabase.select(COLLECTIONS.PROFILES, {filters: {short_name: 'ADMINISTRADOR'}}));
    } else {
      resultAdministratorProfile = await firstValueFrom(this.Main.getProfiles({where: {shortName: "admin"}}));
    }
    if (!resultAdministratorProfile.length) {
      messageAlert("Aviso", "No se tiene registrado el perfil administrador", "warning");
      return;
    }
    this.administratorProfile = resultAdministratorProfile[0];
  }

  async sendMessage() {
    let result_sms: any = await firstValueFrom(this.Main.sendSMS("+51913713735", "Mensaje de prueba"));
    console.log(result_sms);
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
      result.usageSupabase = this.usageSupabase;
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
        this.contadorIntentos++;
        console.log("Contador de intentos ", this.contadorIntentos);
        this.credentials.password = undefined;
        if (this.contadorIntentos === INTENT_MAX_PASSWORD) {

          let resultUserToBlocked: any = await firstValueFrom(this.Main.getMedicalStaff({where: {username: this.credentials.username}}));
          if (!resultUserToBlocked.length) {
            messageAlert("Error", "Credenciales invalidas", "error");
            return;
          }
          let userToBlock: any = resultUserToBlocked[0];
          let unlockCode = generateRandomString(8);
          let resultUserBlocked: any = await firstValueFrom(this.Main.updateMedicalStaff(userToBlock._id, {updated: {blocked: true, unlockCode: unlockCode}}));
          let phone = !userToBlock.phone.startsWith('+51') ? '+51'+userToBlock.phone : userToBlock.phone;
          let result_sms: any = await firstValueFrom(this.Main.sendSMS(phone || "+51913713735", `Este es tu código de desbloqueo de usuario: ${unlockCode}`));
          console.log(result_sms);

          let result_email: any = await firstValueFrom(this.Main.sendEmailWithTemplate(userToBlock.username, "Código de desbloqueo de Usuario", "user-blocked", {username: userToBlock.username, code: unlockCode}));
          if (!result_email) {
            messageAlert("Error", "Error al enviar correo con Código de Desbloqueo", "error");
            return;
          }
          // LOGICA DE ENVIO DE MENSAJE DE CORREO Y SMS
          messageAlert("Cuidado", "El usuario ha sido bloqueado. Se enviaran instrucción de desbloqueo.", "warning");
        }
        return;
      }
      if (result.blocked) {
        messageAlert("Validación", "El usuario está bloqueado. Por favor siga las instrucciones enviadas.", "warning");
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
        console.log(result.profiles);
        let profilesOfHealthEstablishment = result.profiles.filter((p: any) => p.serviceDeliveryInstitution._id === result.currentHealthEstablishment.serviceDeliveryInstitution._id);
        console.log("<<<<<<<<profilesOfHealthEstablishment.length>>>>>>>>");
        console.log(profilesOfHealthEstablishment.length);
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
    loadingAlert("Registrando Información de Usuario");
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
    
    let resultRegister: any;
    let resultDeliveryInstitution: any;
    let deliveryInstitutionCreated: any;
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
        Swal.close();
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

      if (this.newUser.businessName) {
        let newDeliveryInstitution = {
          name: newUser.businessName,
          ruc: newUser.code,
          description: newUser.businessName,
          address: newUser.businessAddress,
          department: newUser.businessDepartment,
          province: newUser.businessProvince,
          district: newUser.businessDistrict,
          ubigeo: newUser.businessUbigeo,
          email: newUser.email
        }

        let resultServiceDeliveryInstitution: any = await firstValueFrom(this.Main.setServiceDeliveryInstitution({news: [newDeliveryInstitution]}));
        console.log(resultDeliveryInstitution);
        deliveryInstitutionCreated = resultServiceDeliveryInstitution[0];
        console.log("Necesitamos crear empresa");
      }

      newUser.healthEstablisments = [
        {
          serviceDeliveryInstitution: deliveryInstitutionCreated._id,
          startDate: (new Date()).toISOString(),
        }
      ];

      newUser.profiles = [
        {
          profile: this.administratorProfile._id,
          serviceDeliveryInstitution: deliveryInstitutionCreated._id,
          status: true
        }
      ];
      
      let body: any = {
        news: [newUser]
      };

      // console.log(this.newUser);
      resultRegister = await firstValueFrom(this.Main.setMedicalStaff(body));
      console.log(resultRegister);
      
    }

    this.registering = false;
    if (resultRegister.message) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        text: resultRegister.message
      });
      return;
    }
    Swal.close();
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
    Swal.close();
    if (this.recovering) return;
    this.recovering = true;

    let userFound: any = await firstValueFrom(this.Supabase.select(COLLECTIONS.MEDICAL_STAFF, {filters: {email: this.forgotPassword.email}}));
    Swal.close();
    console.log(userFound);

    // let resultRecovering: any = await firstValueFrom(this.Supabase.update(COLLECTIONS.MEDICAL_STAFF, ))
  }

  async registerUnlockAccount() {
    loadingAlert("Validando Información de Desbloqueo");
    let resultUserToBlocked: any = await firstValueFrom(this.Main.getMedicalStaff({where: {username: this.unlockCode.username}}));
    if (!resultUserToBlocked.length) {
      messageAlert("Error", "Credenciales invalidas", "error");
      return;
    }

    let userToUnlock: any = resultUserToBlocked[0];
    if (!userToUnlock.blocked) {
      Swal.close();
      messageAlert("Validación", "El usuario que deseas desbloquear no esta Bloqueado.", "warning");
      let result_email: any = await firstValueFrom(this.Main.sendEmailWithTemplate(userToUnlock.username, 'Intento de Bloqueo / Desbloqueo', 'warning-user-unblocked', {username: userToUnlock.username}));
      console.log(result_email);
      if (!result_email) {
        messageAlert("Error", "Error al enviar el correo de Aviso al Usuario", "error");
        return;
      }
      return;
    }
    if (userToUnlock.unlockCode !== this.unlockCode.code) {
      Swal.close();
      messageAlert("Validación", "El código de Desbloqueo de Usuario es incorrecto.", "warning");
      return;
    }

    let resultUserBlocked: any = await firstValueFrom(this.Main.updateMedicalStaff(userToUnlock._id, {updated: {blocked: false, unlockCode: null}}));
    if (!resultUserBlocked) {
      Swal.close();
      messageAlert("Error", "Hubo un error al Desbloquear el Usuario", "error");
      return;
    }
    let result_email: any = await firstValueFrom(this.Main.sendEmailWithTemplate(userToUnlock.username, "Desbloqueo de Usuario", 'unblocked-success', {username: userToUnlock.username}));
    console.log(result_email);
    Swal.close();
    messageAlert("Éxito", "Se desloqueó el usuario en mención.", "success");
    this.isUnlockAccount = false;
  }

  toggleUnlockAccount() {
    this.isUnlockAccount = !this.isUnlockAccount;
  }

}
