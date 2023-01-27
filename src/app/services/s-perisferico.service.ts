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
}
