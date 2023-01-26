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
}
