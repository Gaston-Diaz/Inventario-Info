import { Component, OnInit } from '@angular/core';
import { Periferico } from 'src/app/models/periferico.model';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent {
  titulo = "Lista de Perisfericos"

  constructor() { }

  perisfericos:Periferico[]=[

  ]

  agregarPerisferico(){
    let miPerisferico = new Periferico(this.inputNombreP,this.inputDescripcion,this.inputObservacion,this.inputStock);
    this.perisfericos.push(miPerisferico);
  }

  inputNombreP:string="";
  inputDescripcion:string="";
  inputObservacion:string="OK";
  inputStock:number=0;

}
