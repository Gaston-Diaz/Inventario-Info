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
}
