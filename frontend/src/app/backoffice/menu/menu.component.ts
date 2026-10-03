import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { firstValueFrom } from 'rxjs';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    FormsModule,
    FilterPipe,
    ModalModule
  ],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(
    private Main: MainService
  ) {
    
  }

  @ViewChild("menuModal", {static: false}) menuModal?: ModalDirective;

  menus: any[] = [];
  menuStates: any[] = [
    {id: 1, name: 'Total de menus', quantity: 0},
    {id: 2, name: 'Activos', quantity: 0},
    {id: 3, name: 'Inactivo', quantity: 0},
  ]
  states: any[] = [
    {id: true, name: 'Activo'},
    {id: false, name: 'Inactivo'},
  ];
  filter: any = {};
  newMenu: any = undefined;
  menuIdentifiers: any[] = [];

  ngOnInit(): void {
    this.getMenus();
  }

  async getMenus() {
    let resultMenus: any = await firstValueFrom(this.Main.getMenus());
    console.log(resultMenus);
    this.menus = resultMenus;
    this.menuIdentifiers = this.menus.filter((m: any) => m.identifier);
    this.menuStates.find((m: any) => m.id === 1).quantity = this.menus.length;
    this.menuStates.find((m: any) => m.id === 2).quantity = this.menus.filter((m: any) => m.status).length;
    this.menuStates.find((m: any) => m.id === 3).quantity = this.menus.filter((m: any) => !m.status).length;
  }


  toggleMenu(item?: any) {
    if (this.menuModal?.isShown) {
      this.menuModal.hide();
    } else {
      this.menuModal!.config.ignoreBackdropClick = true;
      this.menuModal!.config.keyboard = false;
      this.newMenu = {};
      console.log(item);
      if (item) {
        this.newMenu = structuredClone(item);
        this.newMenu.isParent = this.newMenu.parent === undefined && this.newMenu.identifier !== undefined;
        if (this.newMenu.parent) {
          this.newMenu.parent = this.newMenu.parent._id;
        }
        this.newMenu.editing = true;
      }
      this.menuModal?.show();
    }
  }


  async saveMenu() {
    if (!this.newMenu.editing) {
      let newMenu: any = structuredClone(this.newMenu);
      delete newMenu.isParent;
      let body: any = {
        news: [newMenu]
      };
      let resultMenuCreate: any = await firstValueFrom(this.Main.setMenu(body));
      console.log(resultMenuCreate);
      if (!resultMenuCreate.length) {
        Swal.fire({
          icon: 'error',
          text: 'Hubo un error al crear el Menu'
        });
        return;
      }
      this.getMenus();
      this.toggleMenu();
      Swal.fire({
        icon: 'success',
        text: 'Se creó el menu correctamente'
      });
    } else {
      let menuUpdate: any = structuredClone(this.newMenu);
      delete menuUpdate._id;
      delete menuUpdate.isParent;
      let bodyUpdate: any = {
        updated: menuUpdate
      };
      let resultMenuUpdate: any = await firstValueFrom(this.Main.updateMenu(this.newMenu._id, bodyUpdate));
      console.log(resultMenuUpdate);
      Swal.fire({
        icon: 'success',
        text: 'Se actualizó correctamente el Menú'
      });
      this.getMenus();
      this.toggleMenu();
    }
  }

  deleteMenu(item: any) {
    Swal.fire({
      icon: 'question',
      text: '¿Estás seguro de eliminar el Menu?',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true
    }).then(async (choice) => {
      if (choice.isConfirmed) {
        let resultMenuDeleted: any = await firstValueFrom(this.Main.deleteMenu(item._id));
        console.log(resultMenuDeleted);
        Swal.fire({
          icon: 'success',
          text: 'Se eliminó correctamente el menú'
        });
        this.getMenus();
      }
    })
  }

}
