import { Data, DonutChartData } from './../../models/types';
import { Component, OnInit } from '@angular/core';
import { Periods, Products, Stores } from '../../models/enums';
import { ChartData } from '../../models/types';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  mainChartData!: ChartData;
  smallChartData!: ChartData;
  productsSalesChartData!: DonutChartData;
  storesSalesChartData!: DonutChartData;

  dashData!: Data;
  totalSales!: string;
  invoicing!: string;
  totalClients!: string;

  operationalCost!: string;
  inventory!: string;

  constructor(private S: DataService) {}

  ngOnInit(): void {
    this.getPeriod(Periods.yearOf2022);
    this.getProduct(Products.CANECAS);
    this.operationalCost = this.S.getOperationalCost();
    this.inventory = this.S.getInventory();
  }


  getPeriod(period: Periods) {
    let data = this.S.getAllData(period);
    this.mainChartData = data.charData;
    this.dashData = data.dashData;

    this.totalSales = this.dashData.totalSales;
    this.invoicing = this.dashData.invoicing;
    this.totalClients = this.dashData.totalClients;
    this.productsSalesChartData = this.dashData.productsSalesChartData;
    this.storesSalesChartData = this.dashData.storesSalesChartData;
  }


  getStore(store: Stores) {
    this.mainChartData = this.S.getStoreChartData(store);
  }


  getProduct(product: Products) {
    this.smallChartData = this.S.getProductChartData(product);
  }
}
