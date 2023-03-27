import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EToner } from 'src/app/models/eToner.model';
import { SEtonerServiceService } from 'src/app/services/s-etoner-service.service';

@Component({
  selector: 'app-mod-etoner',
  templateUrl: './mod-etoner.component.html',
  styleUrls: ['./mod-etoner.component.css']
})
export class ModEtonerComponent implements OnInit {
  titulo = "Modificar Datos - Entrega Toners"
  constructor(private route:ActivatedRoute, private etService: SEtonerServiceService,private router: Router) { }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    let et: EToner = this.etService.buscarEtoner(this.indice);

    this.inputFechaM = et.fecha;
    this.inputIdTonerM = et.idToner;
    this.inputColorM = et.color;
    this.inputEntregadoAM = et.entregadoA;
    this.inputOficinaM = et.oficina;
    this.inputDeM = et.de;
  }

  modificarET(){
    let miET = new EToner(this.inputFechaM,this.inputIdTonerM,this.inputColorM,this.inputEntregadoAM,this.inputOficinaM,this.inputDeM);
    this.etService.actualizarEtoner(this.indice,miET);
    this.router.navigate(['/entregaToners']);
  }

  inputFechaM:string= "";
  inputIdTonerM:string= "";
  inputColorM:string= "";
  inputEntregadoAM:string= "";
  inputOficinaM:string= "";
  inputDeM:string = "";

  indice: number;

}
