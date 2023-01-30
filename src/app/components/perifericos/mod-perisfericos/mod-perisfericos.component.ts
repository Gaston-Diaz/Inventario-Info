import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Periferico } from 'src/app/models/periferico.model';
import { SPerisfericoService } from 'src/app/services/s-perisferico.service';


@Component({
  selector: 'app-mod-perisfericos',
  templateUrl: './mod-perisfericos.component.html',
  styleUrls: ['./mod-perisfericos.component.css']
})
export class ModPerisfericosComponent implements OnInit {
  titulo = "Modificar Datos - Actualizar stock de Perifericos"
  constructor(private route:ActivatedRoute, private perifericoService:SPerisfericoService,private router: Router) { }

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id'];
    let periferico: Periferico = this.perifericoService.buscarPeriferico(this.indice);

    this.inputNombrePM= periferico.nombreProducto;
    this.inputDescripcionM= periferico.descripcion;
    this.inputObservacionM= periferico.observacion;
    this.inputStockM= periferico.stockActual;
  }

  modificarPerisferico(){
    let miPerisferico = new Periferico(this.inputNombrePM,this.inputDescripcionM,this.inputObservacionM,this.inputStockM);
    this.perifericoService.actualizarPeriferico(this.indice,miPerisferico);
    this.router.navigate(['/perisfericos']);
  }

  inputNombrePM:string="";
  inputDescripcionM:string="";
  inputObservacionM:string="OK";
  inputStockM:number=0;

  indice:number;
}
