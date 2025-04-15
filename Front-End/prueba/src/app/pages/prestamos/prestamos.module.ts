import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    HomeComponent
  ]
})
export class PrestamosModule { }
