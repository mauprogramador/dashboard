import { Injectable } from "@angular/core";
import { Periods, Products, Stores } from '../models/enums';
import { Period } from './../models/period';
import { ChartDataService } from './chart-data.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    public period2021Data!: Period;
    public period2022Data!: Period;
    public currentPeriod!: Periods;

    constructor(private S: ChartDataService) {
        this.period2021Data = new Period(Periods.yearOf2021);
        this.period2022Data = new Period(Periods.yearOf2022);
    }


    getPeriodChartData(period: Periods) {
        if (period == Periods.yearOf2021) {
            this.currentPeriod = Periods.yearOf2021;
            return {
                charData: this.S.getPeriodChartData(Periods.yearOf2021, this.period2021Data.getSeries()),
                totalSales: this.period2021Data.totalSales,
                invoicing: this.period2021Data.invoicing,
                operationalCost: this.period2021Data.invoicing * 0.20,
                totalClients: this.period2021Data.invoicing * 0.30,
            };
        } else {
            this.currentPeriod = Periods.yearOf2022;
            return {
                charData: this.S.getPeriodChartData(Periods.yearOf2022, this.period2022Data.getSeries()),
                totalSales: this.period2022Data.totalSales,
                invoicing: this.period2022Data.invoicing,
                operationalCost: this.period2022Data.invoicing * 0.20,
                totalClients: this.period2022Data.invoicing * 0.30,
            };
        }
    }


    getStoreChartData(store: Stores) {
        let store2021 = this.period2021Data.getSeries().filter(series => series.name == store)[0];
        store2021.name = "2021";
        let store2022 = this.period2022Data.getSeries().filter(series => series.name == store)[0];
        store2022.name = "2022";
        let series = [store2021, store2022];
        return this.S.getPeriodChartData(store, series);
    }


    getProductsSales() {
        let stores = this.period2022Data.stores.map(store => { return store.products });
        let products = stores.flat(1)
        let mug = products.filter(product => product.name == Products.CANECAS).map(product => product.totalSales).reduce((a, b) => a + b, 0);
        let books = products.filter(product => product.name == Products.CANECAS).map(product => product.totalSales).reduce((a, b) => a + b, 0);
        let shirt = products.filter(product => product.name == Products.CANECAS).map(product => product.totalSales).reduce((a, b) => a + b, 0);
        let poster = products.filter(product => product.name == Products.CANECAS).map(product => product.totalSales).reduce((a, b) => a + b, 0);

        
        
    }










}
