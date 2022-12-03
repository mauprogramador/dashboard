import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartData } from '../../models/types';

@Component({
  selector: 'app-donut-graphic',
  templateUrl: './donut-graphic.component.html',
  styleUrls: ['./donut-graphic.component.css']
})
export class DonutGraphicComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartData!: ChartData;

  constructor() { }

  ngOnInit(): void {
  }

}
