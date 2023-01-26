export class Toner{

    constructor(unNombre:string,unModelo:string,unColor:string,conveM:string,unStock:number){
        this.nombreToner = unNombre;
        this.modeloImpre = unModelo;
        this.color = unColor;
        this.convMarco = conveM;
        this.stockDispo = unStock;
    }
 
    nombreToner: string ="";
    modeloImpre: string = "";
    color: string = "";
    convMarco: string= "";
    stockDispo: number= 0;
}