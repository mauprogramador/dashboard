import { Component, Input, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { ChartData } from '../../models/types';


@Component({
  selector: 'app-graphic',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent {

  @ViewChild("chart") chart!: ChartComponent;
  @Input() chartData!: ChartData;
  
}