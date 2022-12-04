import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from "ng-apexcharts";


export type ChartData = {
    title: ApexTitleSubtitle;
    chart: ApexChart;
    series: ApexAxisChartSeries;
    x_axis: ApexXAxis;
    y_axis: ApexYAxis;
}


export type DonutChartData = {
    title: ApexTitleSubtitle;
    chart: ApexChart;
    series: number[];
    labels: string[];
}


export type Series = { 
    name: string;
    data: number[];
}


export type Data = {
    totalSales: string,
    invoicing: string,
    totalClients: string,
    productsSalesChartData: DonutChartData,
    storesSalesChartData: DonutChartData,
}