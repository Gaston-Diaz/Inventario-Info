export class Toner{

    constructor(unNombre:string,unModelo:string,unColor:string,unStock:number){
        this.nombreToner = unNombre;
        this.modeloImpre = unModelo;
        this.color = unColor;
        this.stockDispo = unStock;
    }
 
    nombreToner: string ="";
    modeloImpre: string = "";
    color: string = "";
    stockDispo: number= 0;
} 