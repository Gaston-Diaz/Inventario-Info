import { Component, OnInit } from '@angular/core';
import { EPerisferico } from 'src/app/models/ePerisferico.model';
import { SEperisfericoServiceService } from 'src/app/services/s-eperisferico-service.service';

@Component({
  selector: 'app-entrega-productos',
  templateUrl: './entrega-productos.component.html',
  styleUrls: ['./entrega-productos.component.css']
})
export class EntregaProductosComponent {
  titulo= "Entrega de Perifericos"

  constructor(private eperisfericoService: SEperisfericoServiceService) { 
    this.ePerifericos = this.eperisfericoService.ePerisferico;
  }

  ePerifericos: EPerisferico[]=[]

  agregarEPeriferico(){
    let ePeriferico = new EPerisferico(this.inputFecha,this.inputProducto,this.inputDescripcion,this.inputCantidad,this.inputEntregadoA,this.inputOficina,this.inputDe);
    this.eperisfericoService.agregarEperisfericoService(ePeriferico);
  }

  inputFecha:string="";
  inputProducto:string="";
  inputDescripcion:string="";
  inputCantidad:number=0;
  inputEntregadoA:string="";
  inputOficina:string="";
  inputDe:string="";

}
