import { Injectable } from '@angular/core';
import { Toner } from '../models/toner.model';

@Injectable({
  providedIn: 'root'
})
export class STonerService {
  
  constructor() { }

  toners:Toner[]=[];
  
  agregarTonerService(toner: Toner){
    this.toners.push(toner);
  }

  buscarToner(id:number){
    let toner:Toner = this.toners[id];
    return toner;
  }

  actualizarToner(id:number, toner:Toner){
    let tonerModificado = this.toners[id];
    tonerModificado.nombreToner = toner.nombreToner;
    tonerModificado.modeloImpre = toner.modeloImpre;
    tonerModificado.color = toner.color;
    tonerModificado.stockDispo = toner.stockDispo;
  }

}
