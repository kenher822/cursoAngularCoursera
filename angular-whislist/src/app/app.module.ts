import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './pages/destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './pages/lista-destinos/lista-destinos.component';
import { ItemListarComponent } from './pages/item-listar/item-listar.component';
import { ListadoElementosComponent } from './pages/listado-elementos/listado-elementos.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    ItemListarComponent,
    ListadoElementosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
