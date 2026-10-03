import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-health-establishment',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './select-health-establishment.component.html',
  styleUrl: './select-health-establishment.component.css'
})
export class SelectHealthEstablishmentComponent implements OnInit {

  constructor(
    private Main: MainService,
    private Router: Router
  ) {}

  userLoged: any;
  healthEstablishmentSelected: any = {};

  ngOnInit(): void {
    this.userLoged = this.Main.getSession();
  }

  selectHealthEstablishment(healthEstablisment: any) {
    this.healthEstablishmentSelected = healthEstablisment;
  }

  saveCurrentHealth() {
    this.userLoged.currentHealthEstablishment = this.healthEstablishmentSelected;
    this.Main.setSession(this.userLoged);
    this.Router.navigate(['backoffice/tablero']);
  }

}
