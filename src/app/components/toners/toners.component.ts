import { Component, OnInit } from '@angular/core';
import { Toner } from 'src/app/models/toner.model';
import { STonerService } from 'src/app/services/s-toner.service';


@Component({
  selector: 'app-toners',
  templateUrl: './toners.component.html',
  styleUrls: ['./toners.component.css']
})
export class TonersComponent{
  titulo = "Listado de Toners"

  constructor(private tonerService:STonerService) {

    this.toners = this.tonerService.toners;
  }

  toners:Toner[]=[];
  
  
  agregarToner(){
    let miToner = new Toner(this.inputMToner,this.inputMImpre,this.inputColor,this.inputConve,this.inputStock);
    this.tonerService.agregarTonerService(miToner);
  }
  
  
  inputMToner:string= "";
  inputMImpre:string= "";
  inputColor:string= "";
  inputConve:string="";
  inputStock:number= 0;

}
