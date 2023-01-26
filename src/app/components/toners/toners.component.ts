import { Component, OnInit } from '@angular/core';
import { Toner } from 'src/app/models/toner.model';


@Component({
  selector: 'app-toners',
  templateUrl: './toners.component.html',
  styleUrls: ['./toners.component.css']
})
export class TonersComponent{
  titulo = "Lista de Toners"

  constructor() { }

  toners:Toner[]=[

    new Toner("toner1","impresora1","color","si",5),
    new Toner("toner2","impresora2","negro","si",5),
    new Toner("toner3","impresora3","color","si",5),
    new Toner("toner4","impresora4","color","si",5),
  ];
  
  
  agregarToner(){
    let miToner = new Toner(this.inputMToner,this.inputMImpre,this.inputColor,this.inputConve,this.inputStock);
    console.log(miToner);
    this.toners.push(miToner);
  }
  
  
  inputMToner:string= "";
  inputMImpre:string= "";
  inputColor:string= "";
  inputConve:string="";
  inputStock:number= 0;

}
