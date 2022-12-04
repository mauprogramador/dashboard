

export enum Periods {
    yearOf2021 = "2021", 
    yearOf2022 = "2022",
}


export enum Stores {
    ALVORADA = "Alvorada",
    VILAVERDE = "Vila-Verde",
    CENTRO = "Centro",
}


export enum Products {
    CANECAS = "Canecas",
    CAMISETAS = "Camisetas",
    LIVROS = "Livros",
    POSTERES = "Pôsteres"
}


export enum ChartType {
    BAR = "bar",
    DONUT = "donut",
}



export function getStorePrice(store: Stores): number {
    let price: number = 0;
    switch (store) {
        case Stores.VILAVERDE:
            price = 5
            break;
        case Stores.ALVORADA:
            price = 7
            break;
        case Stores.CENTRO:
            price = 10
            break;
        default:
            break;
    }
    return price
} 



export function getProductPrice(product: Products): number {
    let price: number = 0;
    switch (product) {
        case Products.CAMISETAS:
            price = 20
            break;
        case Products.CANECAS:
            price = 5
            break;
        case Products.LIVROS:
            price = 15
            break;
        case Products.POSTERES:
            price = 2
            break;
        default:
            break;
    }
    return price
} 