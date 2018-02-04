import { Component, OnInit } from '@angular/core';
import { ServicioanimacionesService } from '../../../services/servicioanimaciones.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  referenciaAlcanzada: Boolean = false;

  constructor( private _servicioAnimaciones: ServicioanimacionesService) { }

  ngOnInit() {
  }

  setClassanimacion() {
    let claseFinal: String;
    if (window.scrollY >= 100 && !this.referenciaAlcanzada) {
      this.referenciaAlcanzada = true;
    }
    claseFinal = this._servicioAnimaciones.setThreeStateAnimationClass(this.referenciaAlcanzada,
    100, 'navbar-brand', 'estado1', 'estado2', 'estado3');
    return claseFinal;
  }
}
