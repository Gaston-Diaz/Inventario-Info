export class EPC{
    constructor(unaFecha:string,unId:string,unaEntrega:string,unaOfi:string,de:string){
        this.fechaEPC = unaFecha;
        this.idPc = unId;
        this.entregadoA = unaEntrega;
        this.oficina = unaOfi;
        this.de = de;
    }

    fechaEPC:string ="";
    idPc:string = "";
    entregadoA:string = "";
    oficina:string = "";
    de:string = ""
}