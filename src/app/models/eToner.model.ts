export class EToner{

    constructor(fecha:string,id:string,color:string,entregado:string,oficina:string,de:string){
        this.fecha= fecha;
        this.idToner= id;
        this.color= color;
        this.entregadoA= entregado;
        this.oficina= oficina;
        this.de= de;
        
    }

    fecha:string= "";
    idToner:string= "";
    color:string= "";
    entregadoA:string= "";
    oficina:string= "";
    de:string= "";
}