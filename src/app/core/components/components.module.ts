import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card/info-card.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DonutGraphicComponent } from './donut-graphic/donut-graphic.component';


const IMPORTS = [
  CommonModule,
  MaterialModule,
  RouterModule,
  NgApexchartsModule,
  MatCardModule,
  MatProgressBarModule,
];


const COMPONENTS = [
  InfoCardComponent,
  SalesChartComponent,
  DonutGraphicComponent,
];


@NgModule({
  declarations: [COMPONENTS],
  imports: [IMPORTS],
  exports: [COMPONENTS],
})
export class ComponentsModule { }
