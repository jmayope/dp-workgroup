import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { generateRandomString } from '../../constants';

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
    private Router: Router
  ) {}

  credentials: any = {}
  hasProfiles: boolean = false;
  userLoged: any;
  tabs: any[] = [
    { id: 1, name: "Iniciar Sesión"},
    { id: 2, name: "Registro"},
  ];
  tabSelected: any;
  showPassword: boolean = false;
  newUser: any = {};
  registering: boolean = false;
  ngOnInit() {
    this.tabSelected = this.tabs[0];
  }

  toggleTab(tab: any) {
    this.tabSelected = tab;
  }

  async login() {
    console.log('iniciar Sesión')
    let result: any = await firstValueFrom(this.Main.login(this.credentials));
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
    if (!result.profiles.length) {
      Swal.fire({
        text: 'No tienes ningun perfil asignado',
        icon: 'info'
      });
      return;
    }
    if (result.profiles.length === 1) {
      result.currentProfile = result.profiles[0];
      this.Main.setSession(result);
      if (result.healthEstablisments.length === 1) {
        result.currentHealthEstablishment = result.healthEstablisments[0];
        this.Main.setSession(result);
        this.Router.navigate(['backoffice/tablero']);
      } else {
        this.Router.navigate(['autenticacion/seleccionar-establecimiento']);
      }
    } else {
      this.userLoged = result;
      this.userLoged.hasProfiles = this.userLoged.profiles.length > 1;
      this.Main.setSession(this.userLoged);
      this.Router.navigate(['autenticacion/seleccionar-perfil']);
    }
  }
  
  toggleSelectProfile(profile: any) {
    this.userLoged.currentProfile = profile;
  }

  goToDashboard() {
    this.Main.setSession(this.userLoged);
    this.Router.navigate(['backoffice/tablero']);
  }  

  async register() {
    console.log(this.newUser);
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
    let resultRegister: any = await firstValueFrom(this.Main.setMedicalStaff(body));
    console.log(resultRegister);
    this.registering = false;
    if (!resultRegister.length) {
      Swal.fire({
        icon: 'error',
        text: 'Hubo un problema al momento de registrar al Usuario'
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      text: 'Se registro correctamente el Usuario. Revisa tu correo'
    });
    this.ngOnInit();
  }

}
