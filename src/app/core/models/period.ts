import { Periods, Stores } from "./enums";
import { Store } from "./store";
import { Series } from "./types";


export class Period {
    public name!: Periods;
    public stores!: Store[];
    public totalSales!: number;
    public invoicing!: number;


    constructor(name: Periods) {
        this.name = name;
        this.stores = this.getStores();
        this.totalSales = this.getTotalSales();
        this.invoicing = this.getTotalInvoicing();
    }


    getStores(): Store[] {
        return [
            new Store(Stores.CENTRO),
            new Store(Stores.ALVORADA),
            new Store(Stores.VILAVERDE),
        ];
    }


    getTotalSales(): number {
        let total = this.stores.map((store) => {
            return store.sales.reduce((a, b) => a + b, 0);
        });  
        return total.reduce((a, b) => a + b, 0);
    }


    getTotalInvoicing(): number {
        let total = this.stores.map((store) => {
            return store.invoicing;
        });  
        return total.reduce((a, b) => a + b, 0);
    }


    getSeries(): Series[] {
        return this.stores.map((store) => {
            return { name: store.name, data: store.sales }
        });
    }
}