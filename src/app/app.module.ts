import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarrouselComponent } from './components/shared/carrousel/carrousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
