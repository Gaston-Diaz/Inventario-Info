export class EPerisferico{

    constructor(unaFecha:string,unProducto:string,unaDescripcion:string,unaCantidad:number,entrega:string,ofi:string,de:string){
        this.fecha = unaFecha;
        this.producto = unProducto;
        this.descripcion = unaDescripcion;
        this.cantidad = unaCantidad;
        this.entregadoA = entrega;
        this.oficina = ofi;
        this.de = de;
    }

    fecha:string="";
    producto:string="";
    descripcion:string="";
    cantidad:number=0;
    entregadoA:string="";
    oficina:string="";
    de:string="";
}