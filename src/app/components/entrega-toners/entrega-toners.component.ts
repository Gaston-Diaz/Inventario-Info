import { Component, OnInit } from '@angular/core';
import { EToner} from 'src/app/models/eToner.model'


@Component({
  selector: 'app-entrega-toners',
  templateUrl: './entrega-toners.component.html',
  styleUrls: ['./entrega-toners.component.css']
})
export class EntregaTonersComponent {
  titulo = "Entrega de Toners";

  constructor() { }

  etoners:EToner[]=[]

  agregarEToner(){
    let eToner = new EToner(this.inputFecha,this.inputIdToner,this.inputColor,this.inputEntregadoA,this.inputOficina,this.inputDe);
    this.etoners.push(eToner);

  }

  inputFecha:string= "";
  inputIdToner:string= "";
  inputColor:string= "";
  inputEntregadoA:string= "";
  inputOficina:string= "";
  inputDe:string = "";
}
