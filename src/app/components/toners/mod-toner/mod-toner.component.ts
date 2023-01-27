import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toner } from 'src/app/models/toner.model';
import { STonerService } from 'src/app/services/s-toner.service';

@Component({
  selector: 'app-mod-toner',
  templateUrl: './mod-toner.component.html',
  styleUrls: ['./mod-toner.component.css']
})
export class ModTonerComponent implements OnInit {
  titulo = "Actualizar stock de Toner"
  constructor(private route:ActivatedRoute, private tonerService:STonerService, private router: Router) { }

  toners: Toner[]=[];

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id']; //Obtengo id del objeto

    let toner: Toner=this.tonerService.buscarToner(this.indice); //traigo ese objeto en especifico

    this.inputMTonerM = toner.nombreToner; //cargo los datos en los campos de texto
    this.inputMImpreM = toner.modeloImpre;
    this.inputColorM = toner.color;
    this.inputConveM = toner.convMarco;
    this.inputStockM = toner.stockDispo;
  }

  modificarToner(){
    let miToner = new Toner(this.inputMTonerM,this.inputMImpreM,this.inputColorM,this.inputConveM,this.inputStockM);
    this.tonerService.actualizarToner(this.indice, miToner);
    this.router.navigate(['/toners']);
  }

  inputMTonerM:string= "";
  inputMImpreM:string= "";
  inputColorM:string= "";
  inputConveM:string="";
  inputStockM:number= 0;

  indice:number;


}
