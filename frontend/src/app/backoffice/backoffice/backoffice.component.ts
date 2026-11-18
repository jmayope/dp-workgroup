import { CommonModule } from '@angular/common';
import { ApplicationRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MainService } from '../../services/main.service';
import { APP_NAME, COLLECTIONS, SLUG } from '../../constants';
import Swal from 'sweetalert2';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { firstValueFrom } from 'rxjs';
import { SupabaseService } from '../../services/supabase.service';

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
    private Main: MainService,
    private Supabase: SupabaseService
  ) {}

  userLoged: any;
  menu: any[] = [];
  activeRoute: any;
  appName: string = APP_NAME;
  slug: string = SLUG;
  itemSelected: any;
  isNewEntity: boolean = false;

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
    let genericMenu: any;
    if (this.userLoged.usageSupabase) {
      let resultGenericMenu = await firstValueFrom(this.Supabase.select(COLLECTIONS.MENUS));
      resultGenericMenu.map((r: any) => {
        r._id = r.id;
      });

      let headers = resultGenericMenu.filter((m: any) => !m.identifier );
      headers.map((h: any) => {
        h.children = resultGenericMenu.filter((r: any) => r.parent_id === h.id);
      });
      genericMenu = headers;
      console.log(genericMenu);
    } else {
      genericMenu = await this.Main.getMenuGeneric().toPromise();
    }
    console.log(genericMenu);
    genericMenu.reverse();
    let generic: any = {
      children: genericMenu.map((m: any) => { return { menu: m }}),
      menu: {
        name: 'OPCIONES GENÉRICAS',
        icon: 'bi bi-archive'
      }
    };
    let result: any;
    if (this.userLoged.usageSupabase) {

      result = await firstValueFrom(this.Supabase.select(COLLECTIONS.PROFILE_MENUS, {filters: {profile_id: this.userLoged.currentProfile.profile_id}}));
      console.log(result);

    } else {
      let body: any = {
        profile: this.userLoged.currentProfile._id
      }
      result = await this.Main.getMenuByProfile(body, {grouped: true}).toPromise();
      console.log(result);
      this.menu = result;
      
    }
    this.menu.unshift(generic);

    let main: any = {
      children: [{menu: {id: 'dashboard', _id: 'dashboard', name: 'DASHBOARD', icon: 'bi bi-speedometer', url: '/backoffice/tablero'}, }],
      menu: {"id":"dashboard", "_id":"dashboard","name":"DASHBOARD","icon":"bi bi-speedometer","url":"/backoffice/tablero"}
    };
    let itemInSession = JSON.parse(sessionStorage.getItem('itemSelected') || '{}');
    if (itemInSession._id || itemInSession.id) {
      this.itemSelected = itemInSession;
    } else {
      this.itemSelected = main.menu;
      this.selectMenuItem(this.itemSelected);
    }
    console.log(this.itemSelected);
    this.menu.unshift(main);
    if (this.userLoged.usageSupabase) {
      this.getAdditionalInfo();
    }
  }

  async getAdditionalInfo() {
    let result_medical_staff_stablishment: any = await firstValueFrom(this.Supabase.select(COLLECTIONS.MEDICAL_STAFF_ESTABLISHMENTS, {filters: {service_delivery_institution_id: this.userLoged.currentProfile.service_delivery_institution_id}}));
    console.log(result_medical_staff_stablishment);
    this.userLoged.has_medical_staff = result_medical_staff_stablishment.length > 0;
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


