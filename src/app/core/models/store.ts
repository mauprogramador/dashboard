import { Products, Stores } from "./enums";
import { Product } from './product';


export class Store {
    public name!: Stores;
    public price!: number;
    public products!: Product[];
    public sales!: number[];
    public totalSales!: number;
    public invoicing!: number;


    constructor(name: Stores) {
        this.name = name;
        this.price = this.getPrice();
        this.products = this.getProducts();
        this.sales = this.getSales();
        this.totalSales = this.sales.reduce((a, b) => a + b, 0);
        this.invoicing = this.totalSales * this.price;
    }


    getPrice(): number {
        switch (this.name) {
            case Stores.VILAVERDE:
                return 5;
            case Stores.ALVORADA:
                return 7;
            case Stores.CENTRO:
                return 10;
            default:
                return 0;
        }
    } 


    getProducts(): Product[] {
        return [
            new Product(Products.CAMISETAS, this.price),
            new Product(Products.POSTERES, this.price),
            new Product(Products.CANECAS, this.price),
            new Product(Products.LIVROS, this.price),
        ];
    }


    getSales(): number[] {
        let data: number[] = [];
        for (let index = 0; index < 11; index++) {
            let productsSales = this.products.map((product) => {
                return product.sales.at(index)!;
            });  
            let value = productsSales.reduce((a, b) => a + b, 0);
            data.push(value);
        }
        return data;
    }
}