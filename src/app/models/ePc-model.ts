export class EPC{
    constructor(unId:string,unaEntrega:string,unaOfi:string,de:string){
        this.idPc = unId;
        this.entregadoA = unaEntrega;
        this.oficina = unaOfi;
        this.de = de;
    }

    idPc:string = "";
    entregadoA:string = "";
    oficina:string = "";
    de:string = ""
}