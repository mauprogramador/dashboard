import { ChartData, Data, DonutChartData, Series } from './../models/types';
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

    constructor(private S: ChartDataService) {
        this.period2021Data = new Period(Periods.yearOf2021);
        this.period2022Data = new Period(Periods.yearOf2022);
    }


    // Get All Required Data of Dashboard
    getAllData(period: Periods) {
        if (period == Periods.yearOf2021) {
            let periodData = this.period2021Data;
            return {
                charData: this.getPeriodChartData(Periods.yearOf2021, periodData.getSeries()),
                dashData: this.getData(periodData),
            };
        } else {
            let periodData = this.period2022Data;
            return {
                charData: this.getPeriodChartData(Periods.yearOf2022, periodData.getSeries()),
                dashData: this.getData(periodData),
            };
        }
    }


    // Dashboard Data
    getData(period: Period): Data {
        return {
            totalSales: this.formatStringToInt(period.totalSales),
            invoicing: this.formatStringToReal(period.invoicing),
            totalClients: this.formatStringToInt(period.invoicing * 0.30),
            productsSalesChartData: this.getProductsSales(period),
            storesSalesChartData: this.getStoresSales(period),
        }
    }


    // Format Strings
    formatStringToReal(value: number): string {
        return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
    }
    formatStringToInt(value: number): string {
        return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    }


    // Main Graphic: Sales of the three Stores during the Period
    getPeriodChartData(period: Periods, series: Series[]) {
        return this.S.getMainChartData(period, series);
    }


    // Main Graphic: Store Sales over the two Periods
    getStoreChartData(store: Stores): ChartData {
        let store2021 = this.period2021Data.getSeries().filter(series => series.name == store)[0];
        store2021.name = "2021";
        let store2022 = this.period2022Data.getSeries().filter(series => series.name == store)[0];
        store2022.name = "2022";
        let series = [store2021, store2022];
        return this.S.getMainChartData(store, series);
    }


    // Donut Graphic: Total Sales of the four Products during the Period
    getProductsSales(period: Period): DonutChartData {
        let stores = period.stores.map(store => { return store.products });
        let products = stores.flat(1);
        let mug = products.filter(product => product.name == Products.CANECAS).map(product => product.totalSales).reduce((a, b) => a + b, 0);
        let books = products.filter(product => product.name == Products.LIVROS).map(product => product.totalSales).reduce((a, b) => a + b, 0);
        let shirt = products.filter(product => product.name == Products.CAMISETAS).map(product => product.totalSales).reduce((a, b) => a + b, 0);
        let poster = products.filter(product => product.name == Products.POSTERES).map(product => product.totalSales).reduce((a, b) => a + b, 0);      
        return this.S.getDonutChartData("Produtos", [mug, books, shirt, poster], ["Canecas", "Livros", "Camisetas", "Pôsteres"]);
    }


    // Donut Graphic: Total Sales of the three Stores during the Period
    getStoresSales(period: Period): DonutChartData {
        let centro = period.stores[0].totalSales;
        let alvorada = period.stores[1].totalSales;
        let vilaVerde = period.stores[2].totalSales;
        return this.S.getDonutChartData("Lojas", [centro, alvorada, vilaVerde], ["Centro", "Alvorada", "Vila Verde"]);
    }


    // Operational Cost
    getOperationalCost() {
        return this.formatStringToReal(this.period2022Data.invoicing * 0.20);
    }


    // Inventory
    getInventory(): string {        
        let remaining = this.period2022Data.totalSales * 0.40;        
        let total = this.period2022Data.totalSales + remaining;
        let percent = Number((this.period2022Data.totalSales * 100) / total).toFixed(2);
        return String(percent).concat("%");
    }


    // Bar Graphic: Total Sales of the Product in the two Periods
    getProductChartData(productName: Products): ChartData {

        let stores2021 = this.period2021Data.stores.map(store => { return store.products });
        let products2021 = stores2021.flat(1);
        let product2021 = products2021.filter(product => product.name == productName).map(product => product.totalSales);

        let stores2022 = this.period2022Data.stores.map(store => { return store.products });
        let products2022 = stores2022.flat(1);
        let product2022 = products2022.filter(product => product.name == productName).map(product => product.totalSales);

        let series: Series[] = [{ name: "2021", data: product2021 }, { name: "2022", data: product2022 }];
        
        return this.S.getProductChartData(productName, series);
    }
}
