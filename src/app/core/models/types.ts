import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from "ng-apexcharts";
import { Products } from "./enums";


export type ChartData = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    x_axis: ApexXAxis;
    y_axis: ApexYAxis;
    title: ApexTitleSubtitle;
}


export type Series = { 
    name: string;
    data: number[];
}


export type Invoicing = { 
    product: Products, 
    sales: number, 
    price: number, 
    invoicing: number 
}