import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregaProductosComponent } from './components/entrega-productos/entrega-productos.component';
import { EntregaTonersComponent } from './components/entrega-toners/entrega-toners.component';
import { PcsComponent } from './components/pcs/pcs.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';
import { TonersComponent } from './components/toners/toners.component';

const routes: Routes = [
  {path:'toners',component: TonersComponent},
  {path:'entregaToners',component: EntregaTonersComponent},
  {path:'pcs',component:PcsComponent},
  {path:'perisfericos',component: PerifericosComponent},
  {path: 'entregaPerisfericos', component: EntregaProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
