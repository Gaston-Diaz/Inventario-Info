import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregaPcComponent } from './components/entrega-pc/entrega-pc.component';
import { EntregaProductosComponent } from './components/entrega-productos/entrega-productos.component';
import { EntregaTonersComponent } from './components/entrega-toners/entrega-toners.component';
import { ModPCComponent } from './components/pcs/mod-pc/mod-pc.component';
import { PcsComponent } from './components/pcs/pcs.component';
import { ModPerisfericosComponent } from './components/perifericos/mod-perisfericos/mod-perisfericos.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';
import { ModTonerComponent } from './components/toners/mod-toner/mod-toner.component';
import { TonersComponent } from './components/toners/toners.component';

const routes: Routes = [
  {path:'',component:PerifericosComponent},
  {path:'toners',component: TonersComponent},
  {path:'entregaToners',component: EntregaTonersComponent},
  {path:'pcs',component:PcsComponent},
  {path:'perisfericos',component: PerifericosComponent},
  {path: 'entregaPerisfericos', component: EntregaProductosComponent},
  {path: 'entregaPc', component:EntregaPcComponent},
  {path: 'actToner/:id', component:ModTonerComponent},
  {path: 'actPeriferico/:id', component:ModPerisfericosComponent},
  {path: 'actPC/:id', component:ModPCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
