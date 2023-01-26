import { Component, OnInit } from '@angular/core';
import { Pc } from 'src/app/models/pc.model';

@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.css']
})
export class PcsComponent {
  titulo = "Lista de PCs"

  constructor() { }

  pcs:Pc[]=[];

  agregarPC(){
    let miPc = new Pc(this.inputId,this.inputRam,this.inputSO,this.inputSSD,this.inputExtra,this.inputDisponible);
    this.pcs.push(miPc);
  }

  inputId: string="";
  inputRam: string="";
  inputSO: string="";
  inputSSD: string="";
  inputExtra: string="";
  inputDisponible: string="SI";
}
