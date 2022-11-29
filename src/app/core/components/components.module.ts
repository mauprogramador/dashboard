import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCardComponent } from './top-card/top-card.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';


const IMPORTS = [
  CommonModule,
  MaterialModule,
  RouterModule,
  NgApexchartsModule,
  MatCardModule,
  MatProgressBarModule,
];


const COMPONENTS = [
  TopCardComponent,
  SalesChartComponent,
];


@NgModule({
  declarations: [COMPONENTS],
  imports: [IMPORTS],
  exports: [COMPONENTS],
})
export class ComponentsModule { }
