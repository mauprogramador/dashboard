import { Injectable } from '@angular/core';
import { ChartTypes } from '../models/enums';
import { ChartData, Series } from '../models/types';


@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

    getChartOptions(title: string, height: number, width: number, type: ChartTypes, series: Series[],categories: string[]): ChartData {
        return {
            series: series,
            chart: {
                height: height,
                width: width,
                type: type,
            },
            title: {
                text: title
            },
            x_axis: {
                categories: categories,
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


    getPeriodChartData(title: string, series: Series[]): ChartData {
        return this.getChartOptions(
            title,
            420, 
            970,
            ChartTypes.BAR,
            series,
            ["Jan", "Fev",  "Mar",  "Abr",  "Mai",  "Jun",  "Jul",  "Ago", "Set", "Out", "Nov"],
        );
    }


    getProductChartData(title: string, series: Series[]): ChartData {
        return this.getChartOptions(
            title,
            200, 
            200,
            ChartTypes.BAR,
            series,
            ["2021", "2022"],
        );
    }


    getDonutChartData(title: string, series: Series[], categories: string[]): ChartData {
        return this.getChartOptions(
            title,
            300, 
            300,
            ChartTypes.DONUT,
            series,
            categories,
        );
    }
}