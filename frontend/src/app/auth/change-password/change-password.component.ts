import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-change-password',
  imports: [
    CommonModule,
    FormsModule,
  ],
  standalone: true,
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private Router: Router,
    private Main: MainService
  ) {}

  userLoged: any = {};

  ngOnInit(): void {
    this.userLoged = this.Main.getSession();
    console.log(this.userLoged);
    if (this.userLoged.changedPassword) {
      this.Router.navigate(["autenticacion/iniciar-sesion"]);
      return;
    }
    
  }

  async changePassword() {
    Swal.fire({
      icon: 'question',
      text: '¿Estás seguro de cambiar la contraseña?',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then( async (choice) => {
      if (choice.isConfirmed) {
        let bodyUserUpdate: any = {
          updated: {
            password: this.userLoged.newPassword,
            changedPassword: true
          }
        };
        let resultUserUpdated: any = await firstValueFrom(this.Main.updateMedicalStaff(this.userLoged._id, bodyUserUpdate));
        console.log(resultUserUpdated);
        if (!resultUserUpdated.modifiedCount) {
          Swal.fire({
            icon: 'error',
            text: 'Hubo un error al momento de actualizar la contraseña',
            timer: 3000
          });
          return;
        }
        Swal.fire({
          icon: 'success',
          text: 'Se actualizo la contraseña satisfactoriamente.',
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: true,
          showCancelButton: true
        }).then(async (choice) => {
          if (choice.isConfirmed) {
            this.Router.navigate(["autenticacion/iniciar-sesion"]);
          }
        })
      }
    })
  }

  togglePassword() {
    this.userLoged.showPassword = !this.userLoged.showPassword;
  }

  cancel() {
    this.Router.navigate(["autenticacion/iniciar-sesion"]);
  }

}
