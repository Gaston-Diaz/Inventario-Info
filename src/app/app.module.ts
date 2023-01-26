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

@NgModule({
  declarations: [
    AppComponent,
    TonersComponent,
    PerifericosComponent,
    PcsComponent,
    EntregaProductosComponent,
    EntregaTonersComponent,
    EntregaPcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [STonerService,SPcService,SPerisfericoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
