import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from "ng-apexcharts";


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

