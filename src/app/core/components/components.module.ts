import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicComponent } from './graphic/graphic.component';
import { NgApexchartsModule } from 'ng-apexcharts';


const IMPORTS = [
  CommonModule,
  MaterialModule,
  RouterModule,
  NgApexchartsModule,
];


const COMPONENTS = [
  DashboardComponent,
  GraphicComponent,
];


@NgModule({
  declarations: [COMPONENTS],
  imports: [IMPORTS],
  exports: [COMPONENTS],
})
export class ComponentsModule { }
