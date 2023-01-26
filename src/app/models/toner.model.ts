export class Toner{

    constructor(unNombre:string,unModelo:string,unColor:string,unStock:number,conveM:string){
        this.nombreToner = unNombre;
        this.modeloImpre = unModelo;
        this.color = unColor;
        this.stockDispo = unStock;
        this.convMarco = conveM;
    }
 
    nombreToner: string ="";
    modeloImpre: string = "";
    color: string = "";
    stockDispo: number= 0;
    convMarco: string= "";
}