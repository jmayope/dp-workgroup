import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { FormsModule } from '@angular/forms';
import { BackofficeComponent } from './backoffice/backoffice.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
  ],
})
export class BackofficeModule { }
