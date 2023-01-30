import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pc } from 'src/app/models/pc.model';
import { SPcService } from 'src/app/services/s-pc.service';

@Component({
  selector: 'app-mod-pc',
  templateUrl: './mod-pc.component.html',
  styleUrls: ['./mod-pc.component.css']
})
export class ModPCComponent implements OnInit {
  titulo = "Modificar Datos - Actualizar stock de PC"
  constructor(private route:ActivatedRoute, private pcService: SPcService, private router:Router) { }

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id'];
    let pc: Pc = this.pcService.buscarPC(this.indice);

    this.inputIdM = pc.id;
    this.inputRamM= pc.ram;
    this.inputSOM= pc.so;
    this.inputSSDM= pc.ssd;
    this.inputExtraM=pc.extra;
    this.inputDisponibleM=pc.disponible;
  }

  modificarPC(){
    let miPc = new Pc(this.inputIdM,this.inputRamM,this.inputSOM,this.inputSSDM,this.inputExtraM,this.inputDisponibleM);
    this.pcService.actualizarPC(this.indice,miPc);
    this.router.navigate(['/pcs']);
  }

  inputIdM: string="";
  inputRamM: string="";
  inputSOM: string="";
  inputSSDM: string="";
  inputExtraM: string="OK";
  inputDisponibleM: string="SI";

  indice: number;
}
