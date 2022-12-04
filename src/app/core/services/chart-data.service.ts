import { Injectable } from '@angular/core';
import { ChartTypes } from '../models/enums';
import { ChartData, DonutChartData, Series } from '../models/types';


@Injectable({
  providedIn: 'root'
})
export class ChartDataService {



    getMainChartData(title: string, series: Series[]): ChartData {
        return  {
            title: {
                text: title
            },
            chart: {
                height: 420,
                width: 970,
                type: "area",
            },
            series: series,
            x_axis: {
                categories: ["Jan", "Fev",  "Mar",  "Abr",  "Mai",  "Jun",  "Jul",  "Ago", "Set", "Out", "Nov"],
            },
            y_axis: {
                labels: {
                    formatter: (value: any) => {
                    return "R$".concat(String(value));
                    }
                },
            }
        }
    }



    getDonutChartData(title: string, series: number[], labels: string[]): DonutChartData {
        return {
            title: {
                text: title
            },
            chart: {
                height: 300,
                width: 430,
                type: ChartTypes.DONUT,
            },
            series: series,
            labels: labels,
        }
    }



    getProductChartData(title: string, series: Series[]): ChartData {
        return {
            title: {
                text: title
            },
            chart: {
                height: 180,
                width: 450,
                type: "bar",
            },
            series: series,
            x_axis: {
                categories: ["Centro", "Alvorada", "Vila Verde"],
            },
            y_axis: {
                labels: {
                    formatter: (value: any) => {
                    return "R$".concat(String(value));
                    }
                },
            }
        }
    }
}


  