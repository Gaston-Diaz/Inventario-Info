import { Component, OnInit } from '@angular/core';
import { EPC } from 'src/app/models/ePc-model';
import { SEpcServiceService } from 'src/app/services/s-epc-service.service';


@Component({
  selector: 'app-entrega-pc',
  templateUrl: './entrega-pc.component.html',
  styleUrls: ['./entrega-pc.component.css']
})
export class EntregaPcComponent{
  titulo = "Entrega de PCs"

  constructor(private epcService: SEpcServiceService) { 
    this.ePcs = this.epcService.ePCs;
  }

  ePcs: EPC[]=[];
  
  agregarEPC(){
    let ePc = new EPC(this.inputFechaPC,this.inputIdPc,this.inputEntregadoA,this.inputOficina,this.inputDe);
    this.epcService.agregarEpcService(ePc);
  }

  inputFechaPC:string= "";
  inputIdPc:string = "";
  inputEntregadoA:string = "";
  inputOficina:string = "";
  inputDe:string = ""
 
}
