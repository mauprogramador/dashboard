import { ChartData } from "./types";

export class StoreSalesChartData {
    data!: [string, number, number][];
    series: { name: string, data: number[] }[] = [];


    StoreSalesChartData(data: [string, number, number][]) {
        this.data = data;
    }


    generateSeries() {
        this.data.forEach((values) => {
            let data: number[] = [];
            for (let index = 0; index < 11; index++) {
                let value: number = Math.random() * (values[2] - values[1]) + values[1]
                data.push(Math.ceil(value));   
            }
            this.series.push({ name: values[0], data: data })
        });
    }


    getChartData(): ChartData {
        return {
            series: this.series,
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
                    formatter: (value) => {
                        return "R$" + value;
                    }
                },
            }
        };
    }
}
