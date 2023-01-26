import { Component, OnInit } from '@angular/core';
import { Periferico } from 'src/app/models/periferico.model';
import { SPerisfericoService } from 'src/app/services/s-perisferico.service';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent {
  titulo = "Lista de Perisfericos"

  constructor(private perisfericoService:SPerisfericoService) {
    
    this.perisfericos = perisfericoService.perisfericos;
  }

  perisfericos:Periferico[]=[]

  agregarPerisferico(){
    let miPerisferico = new Periferico(this.inputNombreP,this.inputDescripcion,this.inputObservacion,this.inputStock);
    this.perisfericoService.agregarPerisfericoService(miPerisferico);
  }

  inputNombreP:string="";
  inputDescripcion:string="";
  inputObservacion:string="OK";
  inputStock:number=0;

}
