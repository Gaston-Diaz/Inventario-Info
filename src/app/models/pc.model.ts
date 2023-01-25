export class Pc{

    constructor(unId:string,unaRam:string,unSO:string,unSSD:string,unExtra:string,dispo:string){
        this.id = unId;
        this.ram = unaRam;
        this.so = unSO;
        this.ssd = unSSD;
        this.extra = unExtra;
        this.disponible = dispo;
    }

    id: string = "";
    ram: string = "";
    so: string = "";
    ssd: string= "";
    extra: string= "";
    disponible: string = "";
}