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
}
