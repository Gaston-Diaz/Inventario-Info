import { Injectable } from '@angular/core';
import { EToner } from '../models/eToner.model';

@Injectable({
  providedIn: 'root'
})
export class SEtonerServiceService {

  constructor() { }

  eToners: EToner[]=[];

  agregarETonerService(unToner:EToner){
    this.eToners.push(unToner);
  }

  buscarEtoner(id:number){
    let etoner: EToner = this.eToners[id];
    return etoner;
  }

  actualizarEtoner(id:number,et:EToner){
    let etModificado = this.eToners[id];
    etModificado.fecha = et.fecha;
    etModificado.idToner = et.idToner;
    etModificado.color = et.color;
    etModificado.entregadoA = et.entregadoA;
    etModificado.oficina = et.oficina;
    etModificado.de = et.de;
  }
}
