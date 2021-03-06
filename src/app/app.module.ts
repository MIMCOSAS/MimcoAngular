import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 // Services
 import { ServicioanimacionesService } from './services/servicioanimaciones.service';

// Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarrouselComponent } from './components/shared/carrousel/carrousel.component';
import { AboutComponent } from './components/about/about.component';
import { MimcoserviciosComponent } from './components/mimcoservicios/mimcoservicios.component';
import { NuestrosclientesComponent } from './components/nuestrosclientes/nuestrosclientes.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactenosComponent } from './components/shared/contactenos/contactenos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrouselComponent,
    AboutComponent,
    MimcoserviciosComponent,
    NuestrosclientesComponent,
    FooterComponent,
    ContactenosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    ServicioanimacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
