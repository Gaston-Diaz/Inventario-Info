export class Periferico{

    constructor(unNombre:string, unaDescripcion:string,unaObservacion:string, unStock:number){
        this.nombreProducto = unNombre;
        this.descripcion = unaDescripcion;
        this.observacion = unaObservacion;
        this.stockActual = unStock;
    }

    nombreProducto: string ="";
    descripcion: string = "";
    observacion: string = "";
    stockActual: number = 0;
}