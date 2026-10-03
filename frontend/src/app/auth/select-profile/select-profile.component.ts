import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-select-profile',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './select-profile.component.html',
  styleUrl: './select-profile.component.css'
})
export class SelectProfileComponent implements OnInit {

  constructor(
    private Main: MainService,
    private Router: Router
  ) {

  }

  userLoged: any;
  loading: boolean = true;
  profileSelected: any;
  ngOnInit(): void {
    this.getUserData();
  }

  async getUserData() {
    this.userLoged = await this.Main.getSession();
    let result: any = await this.Main.getMedicalStaff({where: {_id: this.userLoged._id }}).toPromise();
    console.log(result);
    if (result.length) {
      this.userLoged = result[0];
      console.log(this.userLoged);
      this.loading = false;
    } else {
      Swal.fire({
        text: 'No debes estar aqui',
        icon: 'error'
      });
      this.Main.destroySession();
      this.Router.navigate(["/autenticacion/iniciar-sesion"]);
    }
  }

  selectProfile(profile: any) {
    this.profileSelected = profile;
  }

  async nextToHome() {
    this.userLoged.currentProfile = this.profileSelected;
    this.userLoged.token = await this.Main.getToken();
    console.log(this.userLoged);
    // return;
    let userSaved = await this.Main.setSession(this.userLoged);
    if (!this.userLoged.healthEstablisments.length) {
      this.Router.navigate(['backoffice/tablero']);
    } else if (this.userLoged.healthEstablisments.length === 1) {
      this.userLoged.currentHealthEstablishment = this.userLoged.healthEstablisments[0];
      this.Main.setSession(this.userLoged);
      this.Router.navigate(['backoffice/tablero']);
    } else {
      this.Router.navigate(['autenticacion/seleccionar-establecimiento']);
    }
  }

}
