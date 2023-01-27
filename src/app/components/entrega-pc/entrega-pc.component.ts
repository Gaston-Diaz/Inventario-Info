import { Component, OnInit } from '@angular/core';
import { EPC } from 'src/app/models/ePc-model';


@Component({
  selector: 'app-entrega-pc',
  templateUrl: './entrega-pc.component.html',
  styleUrls: ['./entrega-pc.component.css']
})
export class EntregaPcComponent{
  titulo = "Entrega de PCs"

  constructor() { }

  ePcs: EPC[]=[];
  
  agregarEPC(){
    let ePc = new EPC(this.inputFechaPC,this.inputIdPc,this.inputEntregadoA,this.inputOficina,this.inputDe);
    this.ePcs.push(ePc);
  }

  inputFechaPC:string= "";
  inputIdPc:string = "";
  inputEntregadoA:string = "";
  inputOficina:string = "";
  inputDe:string = ""
 
}
