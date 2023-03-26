import { Injectable } from '@angular/core';
import { EPerisferico } from '../models/ePerisferico.model';

@Injectable({
  providedIn: 'root'
})
export class SEperisfericoServiceService {

  constructor() { }

  ePerisferico: EPerisferico[]=[]

  agregarEperisfericoService(unPerisferico: EPerisferico){
    this.ePerisferico.push(unPerisferico);
  }

  buscarEperisferico(id:number){
    let eperisferico: EPerisferico = this.ePerisferico[id];
    return eperisferico;
  }

  actualizarEperisferico(id:number,ep:EPerisferico){
    let epModificado = this.ePerisferico[id];
    epModificado.fecha = ep.fecha;
    epModificado.producto = ep.producto;
    epModificado.descripcion = ep.descripcion;
    epModificado.cantidad = ep.cantidad;
    epModificado.entregadoA = ep.entregadoA;
    epModificado.oficina = ep.oficina;
    epModificado.de = ep.de;
  }
}
