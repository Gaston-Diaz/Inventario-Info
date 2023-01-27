import { Component, OnInit } from '@angular/core';
import { Pc } from 'src/app/models/pc.model';
import { SPcService } from 'src/app/services/s-pc.service';

@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.css']
})
export class PcsComponent {
  titulo = "Lista de PCs"

  constructor(private PcService: SPcService) {
    this.pcs = this.PcService.pcs

  }

  pcs:Pc[]=[];

  agregarPC(){
    let miPc = new Pc(this.inputId,this.inputRam,this.inputSO,this.inputSSD,this.inputExtra,this.inputDisponible);
    this.PcService.agregarPCService(miPc);
  }

  inputId: string="";
  inputRam: string="";
  inputSO: string="";
  inputSSD: string="";
  inputExtra: string="OK";
  inputDisponible: string="SI";
}
