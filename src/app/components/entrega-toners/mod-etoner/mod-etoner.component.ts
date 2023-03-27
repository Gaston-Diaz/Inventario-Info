import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-etoner',
  templateUrl: './mod-etoner.component.html',
  styleUrls: ['./mod-etoner.component.css']
})
export class ModEtonerComponent implements OnInit {
  titulo = "Modificar Datos - Entrega Toners"
  constructor() { }

  ngOnInit(): void {
  }

  modificarET(){

  }

  inputFechaM:string= "";
  inputIdTonerM:string= "";
  inputColorM:string= "";
  inputEntregadoAM:string= "";
  inputOficinaM:string= "";
  inputDeM:string = "";

}
