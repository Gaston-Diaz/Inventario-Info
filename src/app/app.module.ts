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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
