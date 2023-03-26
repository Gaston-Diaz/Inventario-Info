import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TonersComponent } from './components/toners/toners.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';
import { PcsComponent } from './components/pcs/pcs.component';
import { EntregaProductosComponent } from './components/entrega-productos/entrega-productos.component';
import { EntregaTonersComponent } from './components/entrega-toners/entrega-toners.component';
import { EntregaPcComponent } from './components/entrega-pc/entrega-pc.component';
import { FormsModule } from '@angular/forms';
import { STonerService } from './services/s-toner.service';
import { SPcService } from './services/s-pc.service';
import { SPerisfericoService } from './services/s-perisferico.service';
import { ModTonerComponent } from './components/toners/mod-toner/mod-toner.component';
import { ModPerisfericosComponent } from './components/perifericos/mod-perisfericos/mod-perisfericos.component';
import { ModPCComponent } from './components/pcs/mod-pc/mod-pc.component';
import { SEpcServiceService } from './services/s-epc-service.service';
import { ModEpcComponent } from './components/entrega-pc/mod-epc/mod-epc.component';
import { ModEProdComponent } from './components/entrega-productos/mod-eprod/mod-eprod.component';


@NgModule({
  declarations: [
    AppComponent,
    TonersComponent,
    PerifericosComponent,
    PcsComponent,
    EntregaProductosComponent,
    EntregaTonersComponent,
    EntregaPcComponent,
    ModTonerComponent,
    ModPerisfericosComponent,
    ModPCComponent,
    ModEpcComponent,
    ModEProdComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [STonerService,SPcService,SPerisfericoService,SEpcServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
