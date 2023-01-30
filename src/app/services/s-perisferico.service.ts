import { Injectable } from '@angular/core';
import { Periferico } from '../models/periferico.model';

@Injectable({
  providedIn: 'root'
})
export class SPerisfericoService {

  constructor() { }

  perisfericos:Periferico[]=[]

  agregarPerisfericoService(unPerisferico: Periferico){
    this.perisfericos.push(unPerisferico);
  }

  buscarPeriferico(id:number){
    let perisferico:Periferico = this.perisfericos[id];
    return perisferico;
  }

  actualizarPeriferico(id:number, perisferico:Periferico){
    let perisfericoMOD = this.perisfericos[id];
    perisfericoMOD.nombreProducto = perisferico.nombreProducto;
    perisfericoMOD.descripcion = perisferico.descripcion;
    perisfericoMOD.observacion = perisferico.observacion;
    perisfericoMOD.stockActual = perisferico.stockActual;
  }
}
