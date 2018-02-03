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

    if (window.scrollY >= 100) {
      this.referenciaAlcanzada = true;
    }
    this._servicioAnimaciones.imprimirAlgo();
  }
}
