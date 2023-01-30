import { Injectable } from '@angular/core';
import { Pc } from '../models/pc.model';

@Injectable({
  providedIn: 'root'
})
export class SPcService {

  constructor() { }

  pcs:Pc[]=[];

  agregarPCService(unPC: Pc){
    this.pcs.push(unPC);
  } 

  buscarPC(id:number){
    let pc:Pc = this.pcs[id];
    return pc;
  }

  actualizarPC(id:number, pc:Pc){
    let pcModificada = this.pcs[id];
    pcModificada.id = pc.id;
    pcModificada.ram = pc.ram;
    pcModificada.so = pc.so;
    pcModificada.ssd = pc.ssd;
    pcModificada.extra = pc.extra;
    pcModificada.disponible = pc.disponible;
  }
}
