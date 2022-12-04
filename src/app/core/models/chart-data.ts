import { ChartType } from './enums';
import { ChartData } from './types';



export function getChartData(height: number, width: number, type: ChartType, series: [], title: string, categories: string[]): ChartData {
  return {
    series: series,
    chart: {
      height: height,
      width: width,
      type: type
    },
    title: {
      text: title
    },
    x_axis: {
      categories: categories
    },
    y_axis: {
      labels: {
        formatter: function (value) {
          return "R$".concat(String(value));
        }
      },
    }
  }
}





