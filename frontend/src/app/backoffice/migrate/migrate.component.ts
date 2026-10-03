import { Component, ElementRef, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-migrate',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './migrate.component.html',
  styleUrl: './migrate.component.css'
})
export class MigrateComponent implements OnInit {

  constructor(
    private ElementRef: ElementRef,
    private Main: MainService
  ) {

  }

  fileToMigrate: any;
  migrating: boolean = false;

  ngOnInit() {
    
  }

  async uploadFile() { 
    const file: HTMLInputElement = this.ElementRef.nativeElement.querySelector(`#fileToMigrate`)
    let fileCount: number = file.files!.length;
    let formData = new FormData();
    this.migrating = true;
    formData.append('file', file.files?.item(0)!);
    Swal.fire({
      html: `<div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> <br>Migrando datos`,
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      showCancelButton: false
    });
    let data: any = await this.Main.uploadFile(formData).toPromise();
    Swal.close();
    this.migrating = false;
    this.fileToMigrate = undefined;
    if (data.error) {
      Swal.fire({
        text: 'Hubo un error',
        icon: 'error'
      });
    }
    Swal.fire({
      text: data.message,
      icon: 'success'
    });
  }

}
