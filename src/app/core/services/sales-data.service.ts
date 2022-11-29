import { Stores } from './../models/enums';
import { ChartData } from '../models/types';
import { Injectable } from '@angular/core';
import { ProductSalesChart } from '../models/product-sales-chart';


@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  private chart2021Data!: ChartData;
  private chart2022Data!: ChartData;
  private totalProductsOfTheYear!: number;
  private totalInvoicingOfTheYear!: number;


  constructor() {
    this.chart2021Data = this.generate2021();
    this.chart2022Data = this.generate2022();
  }


  public generateChartData(): ChartData {
    return {
      series: [],
      chart: {
        height: 350,
        width: 700,
        type: "bar"
      },
      title: {
        text: "Faturamento"
      },
      x_axis: {
        categories: ["Jan", "Fev",  "Mar",  "Abr",  "Mai",  "Jun",  "Jul",  "Ago", "Set", "Out", "Nov"]
      },
      y_axis: {
        labels: {
          formatter: function (value) {
            console.log("R$" + value);
            return "R$" + value;
          }
        },
      }
    };
  }


  public generateData(name: string, min: number, max: number) {
    let data: number[] = [];
    for (let index = 0; index < 11; index++) {
        let value: number = Math.random() * (max - min) + min
        data.push(Math.ceil(value));   
    }
    return { name: name, data: data }
  }


  public generate2021(): ChartData {
    let chartData = this.generateChartData();
    let series = [
      this.generateData("Alvorada", 30, 65),
      this.generateData("Vila-Verde", 25, 40),
      this.generateData("Centro", 40, 70),
    ];
    chartData.series = series;
    return chartData;
  }


  public generate2022(): ChartData {
    let chartData = this.generateChartData();
    let series = [
      this.generateData("Alvorada", 40, 75),
      this.generateData("Vila-Verde", 35, 50),
      this.generateData("Centro", 60, 80),
    ];
    chartData.series = series;
    return chartData;
  }



  public getInitialChartData(): ChartData {
    let product = new ProductSalesChart(Stores.CENTRO);

    console.log(product.getChartData());
    
    console.log(product.getProductInvoices());

    return this.chart2022Data;
  }
  








// public updateData(series: {name: string, data: number[]}[]) {
//   this.MAIN_CHART_DATA.series = series;
// }
//   public findOneById(id: string): Observable<TaskDto> {
//     return this.http.get<TaskDto>(baseUrl.concat('/', id));
//   }
//   public findOneByDescription(description: string): Observable<TaskDto> {
//     return this.http.get<TaskDto>(baseUrl.concat('/description/', description));
//   }
//   public delete(id: string): Observable<TaskDto> {
//     return this.http.delete<TaskDto>(baseUrl.concat('/', id));
//   }
//   public changeStatus(data: any, status: string): Observable<TaskDto> {
//     const task: TaskDto = data;
//     const updateTask: UpdateTaskDto = { description: task.description, status: status }
//     return this.http.patch<TaskDto>(baseUrl.concat('/', task.id), updateTask);
//   }
}
