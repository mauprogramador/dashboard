import { SalesDataService } from './../../services/sales-data.service';
import { ChartData } from '../../models/types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";


@Component({
  selector: 'app-graphic',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartData!: ChartData;

  ngOnInit(): void {
  }

  constructor(
    private salesDataService: SalesDataService,
  ) {
    this.chartData = this.salesDataService.getInitialChartData();
  }
}