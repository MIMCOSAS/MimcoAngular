import { fade } from '../../../animaciones/fadeanimation';
import { Component, HostListener, Input, OnInit} from '@angular/core';
import { ServicioanimacionesService } from '../../../services/servicioanimaciones.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    fade
  ]
})
export class NavbarComponent implements OnInit {
  // propiedades del componente
  showNavBrand: Boolean = false;
  // EventListeners del componente
  @HostListener('window:scroll') onWindowScroll() {
    this.showNavBrand = this._servicioAnimaciones.HideShowWindowScrollY(200);
  }
  // Constructor y funciones del componente
  constructor(private _servicioAnimaciones: ServicioanimacionesService) {
  }

  ngOnInit() {
  }
}
