import { Injectable } from '@angular/core';
import { EPC } from '../models/ePc-model';

@Injectable({
  providedIn: 'root'
})
export class SEpcServiceService {

  constructor() { }

  ePCs: EPC[]=[];

  agregarEpcService(unaEpc:EPC){
    this.ePCs.push(unaEpc);
  }

  buscarEpc(id:number){
    let epc: EPC = this.ePCs[id]; //Guardo en la variable epc el elemento con id que recibi por parametro
    return epc;
  }

  actualizarEpc(id:number,epc:EPC){
    let epcMOD = this.ePCs[id];
    epcMOD.fechaEPC = epc.fechaEPC;
    epcMOD.idPc = epc.idPc;
    epcMOD.entregadoA = epc.entregadoA;
    epcMOD.oficina = epc.oficina;
    epcMOD.de = epc.de;
  }
}
