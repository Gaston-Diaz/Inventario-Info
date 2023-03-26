import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EPC } from 'src/app/models/ePc-model';
import { SEpcServiceService } from 'src/app/services/s-epc-service.service';

@Component({
  selector: 'app-mod-epc',
  templateUrl: './mod-epc.component.html',
  styleUrls: ['./mod-epc.component.css']
})
export class ModEpcComponent implements OnInit {
  titulo = "Modificar Datos - Entrega de PC"
  constructor(private route:ActivatedRoute, private epcService:SEpcServiceService,private router: Router) { }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    let epc: EPC = this.epcService.buscarEpc(this.indice);

    this.inputFechaPCM = epc.fechaEPC;
    this.inputIdPcM = epc.idPc;
    this.inputEntregadoAM = epc.entregadoA;
    this.inputOficinaM = epc.oficina;
    this.inputDeM = epc.de;
  }

  modificarEPC(){
    let miEPC = new EPC(this.inputFechaPCM,this.inputIdPcM,this.inputEntregadoAM,this.inputOficinaM,this.inputDeM);
    this.epcService.actualizarEpc(this.indice,miEPC);
    this.router.navigate(['/entregaPc']);
  }

  inputFechaPCM:string= "";
  inputIdPcM:string = "";
  inputEntregadoAM:string = "";
  inputOficinaM:string = "";
  inputDeM:string = ""

  indice:number;

}
