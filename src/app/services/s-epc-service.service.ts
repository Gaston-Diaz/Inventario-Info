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
}
