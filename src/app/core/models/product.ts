import { Products } from "../models/enums";


export class Product {
    public name!: Products;
    public sales!: number[];
    public totalSales!: number;
    public price!: number;
    public invoicing!: number;


    constructor(name: Products, storePrice: number) {
        this.name = name;
        this.price = this.getPrice();
        this.sales = this.getSales(storePrice);
        this.totalSales = this.sales.reduce((a, b) => a + b, 0);
        this.invoicing = this.totalSales * this.price;
    }


    getPrice(): number {
        switch (this.name) {
            case Products.CAMISETAS:
                return 20;
            case Products.CANECAS:
                return 5;
            case Products.LIVROS:
                return 15;
            case Products.POSTERES:
                return 2;
            default:
                return 0;
        }
    } 


    getSales(storePrice: number): number[] {
        let max = (storePrice * 2) + 50
        let data: number[] = [];
        for (let index = 0; index < 11; index++) {
            let value: number = Math.random() * (max - 10) + 10
            data.push(Math.ceil(value));   
        }
        return data;
    }
}