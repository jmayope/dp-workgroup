import { CommonModule } from '@angular/common';
import { ApplicationRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MainService } from '../../services/main.service';
import { APP_NAME, SLUG } from '../../constants';
import Swal from 'sweetalert2';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-backoffice',
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    BsDropdownModule
  ],
  standalone: true,
  templateUrl: './backoffice.component.html',
  styleUrl: './backoffice.component.css'
})
export class BackofficeComponent implements OnInit {
  constructor(
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private Main: MainService
  ) {}

  userLoged: any;
  menu: any[] = [];
  activeRoute: any;
  appName: string = APP_NAME;
  slug: string = SLUG;
  itemSelected: any;

  ngOnInit(): void {
    console.log(this.ActivatedRoute.root.snapshot.data);
    this.activeRoute = this.ActivatedRoute.snapshot.data;
    this.userLoged = this.Main.getSession();
    console.log(this.userLoged);
    if (!this.userLoged) {
      this.Router.navigate(['autenticacion/iniciar-sesion']);
      return;
    }
    this.getMenu()
  }

  async getMenu() {

    let genericMenu: any = await this.Main.getMenuGeneric().toPromise();
    console.log(genericMenu);
    genericMenu.reverse();
    let generic: any = {
      children: genericMenu.map((m: any) => { return { menu: m }}),
      menu: {
        name: 'OPCIONES GENÉRICAS',
        icon: 'bi bi-archive'
      }
    };
    let body: any = {
      profile: this.userLoged.currentProfile._id
    }
    let result: any = await this.Main.getMenuByProfile(body, {grouped: true}).toPromise();
    console.log(result);
    this.menu = result;
    this.menu.unshift(generic);

    let main: any = {
      children: [{menu: {_id: 'dashboard', name: 'DASHBOARD', icon: 'bi bi-speedometer', url: '/backoffice/tablero'}, }],
      menu: {"_id":"dashboard","name":"DASHBOARD","icon":"bi bi-speedometer","url":"/backoffice/tablero"}
    };
    let itemInSession = JSON.parse(sessionStorage.getItem('itemSelected') || '{}');
    if (itemInSession._id) {
      this.itemSelected = itemInSession;
    } else {
      this.itemSelected = main.menu;
      this.selectMenuItem(this.itemSelected);
    }
    console.log(this.itemSelected);
    this.menu.unshift(main);
  }

  toggleMenuItem(item: any) {
    item.show = !item.show;
  }

  logout() {
    Swal.fire({
      text: '¿Estas seguro de salir?',
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      allowEnterKey: false
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        this.Main.destroySession();
        sessionStorage.removeItem('itemSelected');
        console.log('Salir');
        this.Router.navigate(['autenticacion/iniciar-sesion']);
      }
    })
  }

  selectMenuItem(item: any) {
    this.itemSelected = item;
    sessionStorage.setItem('itemSelected', JSON.stringify(this.itemSelected));
    console.log(this.itemSelected);
  }

}


