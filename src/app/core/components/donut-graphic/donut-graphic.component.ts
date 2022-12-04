import { Component, Input, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { DonutChartData } from '../../models/types';


@Component({
  selector: 'app-donut-graphic',
  templateUrl: './donut-graphic.component.html',
  styleUrls: ['./donut-graphic.component.css']
})
export class DonutGraphicComponent {

  @ViewChild("chart") chart!: ChartComponent;
  @Input() chartData!: DonutChartData;

}
