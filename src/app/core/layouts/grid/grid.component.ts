import { Component, OnInit } from '@angular/core';
import { Periods, Stores } from '../../models/enums';
import { ChartData } from '../../models/types';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  totalSales!: string;
  invoicing!: string;
  operationalCost!: string;
  totalClients!: string;
  chartData!: ChartData;

  constructor(private S: DataService) {}

  ngOnInit(): void {
    this.getPeriod(Periods.yearOf2022);
    this.S.getProductsSales();
  }


  formatStringToReal(value: number): string {
    return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  }
  formatStringToInt(value: number): string {
    return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  }


  getPeriod(period: Periods) {
    let data = this.S.getPeriodChartData(period);
    this.totalSales = this.formatStringToInt(data.totalSales);
    this.invoicing = this.formatStringToReal(data.invoicing);
    this.operationalCost = this.formatStringToReal(data.operationalCost);
    this.totalClients = this.formatStringToInt(data.totalClients);
    this.chartData = data.charData;
  }


  getStore(store: Stores) {
    this.chartData = this.S.getStoreChartData(store);
  }
}
