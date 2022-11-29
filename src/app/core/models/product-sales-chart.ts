import { ChartData, Invoicing, Series } from "./types";
import { getProductPrice, getStorePrice, Products, Stores } from "./enums";


export class ProductSalesChart {
    products: Products[] = [Products.CAMISETAS, Products.CANECAS, Products.LIVROS, Products.POSTERES];
    invoicing: Invoicing[] = [];
    series: Series[] = [];
    storePrice!: number;
    store!: Stores;
    productsData!: ChartData[];


    constructor(store: Stores) {
        this.store = store;
        this.storePrice = getStorePrice(store);
        this.generateSeries();
    }


    generateSeries() {
        let max = (this.storePrice * 2) + 50
        this.products.forEach((value) => {
            let data: number[] = [];
            for (let index = 0; index < 11; index++) {
                let value: number = Math.random() * (max - 10) + 10
                data.push(Math.ceil(value));   
            }
            this.series.push({ name: value, data: data })
            let sales = data.reduce((a, b) => a + b, 0);
            this.invoicing.push({
                product: value,
                sales: sales,
                price: getProductPrice(value),
                invoicing: sales * getProductPrice(value),
            });
        });
    }


    getProductInvoices(): Invoicing[] {
        return this.invoicing;
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
                text: this.store
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
