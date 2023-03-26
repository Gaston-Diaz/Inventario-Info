import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EPerisferico } from 'src/app/models/ePerisferico.model';
import { SEperisfericoServiceService } from 'src/app/services/s-eperisferico-service.service';

@Component({
  selector: 'app-mod-eprod',
  templateUrl: './mod-eprod.component.html',
  styleUrls: ['./mod-eprod.component.css']
})
export class ModEProdComponent implements OnInit {
  titulo = "Modificar datos - Entrega de Perisfericos"
  constructor(private route:ActivatedRoute, private epService:SEperisfericoServiceService,private router: Router) { }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    let ep: EPerisferico = this.epService.buscarEperisferico(this.indice);

    this.inputFechaM = ep.fecha;
    this.inputProductoM = ep.producto;
    this.inputDescripcionM = ep.descripcion;
    this.inputCantidadM = ep.cantidad;
    this.inputEntregadoAM = ep.entregadoA;
    this.inputOficinaM = ep.oficina;
    this.inputDeM = ep.de;
  }
  modificarEP(){
    let miEP = new EPerisferico(this.inputFechaM,this.inputProductoM,this.inputDescripcionM,this.inputCantidadM,this.inputEntregadoAM,this.inputOficinaM,this.inputDeM);
    this.epService.actualizarEperisferico(this.indice,miEP);
    this.router.navigate(['/entregaPerisfericos']);
  }

  inputFechaM:string="";
  inputProductoM:string="";
  inputDescripcionM:string="";
  inputCantidadM:number=0;
  inputEntregadoAM:string="";
  inputOficinaM:string="";
  inputDeM:string="";

  indice:number;

}
