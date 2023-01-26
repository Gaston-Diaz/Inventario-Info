import { Injectable } from '@angular/core';
import { Toner } from '../models/toner.model';

@Injectable({
  providedIn: 'root'
})
export class STonerService {
  
  constructor() { }

  toners:Toner[]=[

    new Toner("toner1","impresora1","color","si",5),
    new Toner("toner2","impresora2","negro","si",5),
    new Toner("toner3","impresora3","color","si",5),
    new Toner("toner4","impresora4","color","si",5),
  ];
  
  agregarTonerService(toner: Toner){
    this.toners.push(toner);
  }


}
