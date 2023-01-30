import { Component, OnInit } from '@angular/core';
import { EToner} from 'src/app/models/eToner.model'
import { SEtonerServiceService } from 'src/app/services/s-etoner-service.service';


@Component({
  selector: 'app-entrega-toners',
  templateUrl: './entrega-toners.component.html',
  styleUrls: ['./entrega-toners.component.css']
})
export class EntregaTonersComponent {
  titulo = "Entrega de Toners";

  constructor(private etService:SEtonerServiceService) { 
    this.etoners = this.etService.eToners;
  }

  etoners:EToner[]=[]

  agregarEToner(){
    let eToner = new EToner(this.inputFecha,this.inputIdToner,this.inputColor,this.inputEntregadoA,this.inputOficina,this.inputDe);
    this.etService.agregarETonerService(eToner);

  }

  inputFecha:string= "";
  inputIdToner:string= "";
  inputColor:string= "";
  inputEntregadoA:string= "";
  inputOficina:string= "";
  inputDe:string = "";
}
