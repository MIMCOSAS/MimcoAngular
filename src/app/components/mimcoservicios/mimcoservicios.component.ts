import { Component, OnInit } from '@angular/core';
import { ServicioanimacionesService } from '../../services/servicioanimaciones.service';

@Component({
  selector: 'app-mimcoservicios',
  templateUrl: './mimcoservicios.component.html',
  styleUrls: ['./mimcoservicios.component.scss']
})
export class MimcoserviciosComponent implements OnInit {

  referenciaAlcanzada: Boolean = false;

  constructor(private _servicioAnimaciones: ServicioanimacionesService) { }

  ngOnInit() {
  }

  setClassanimacion() {
    let claseFinal: String;
    if (window.scrollY >= 100 && !this.referenciaAlcanzada) {
      this.referenciaAlcanzada = true;
    }
    console.log(window.scrollY);
    claseFinal = this._servicioAnimaciones.setThreeStateAnimationClass(this.referenciaAlcanzada,
    1300, 'container-fluid text-center bg-orange', 'estado1', 'estado2', 'estado3');
    return claseFinal;
  }

}
