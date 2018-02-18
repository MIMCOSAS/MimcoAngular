import { Component, OnInit, HostListener } from '@angular/core';
import { ServicioanimacionesService } from '../../services/servicioanimaciones.service';
import { fade } from '../../animaciones/fadeanimation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    fade
  ]
})
export class AboutComponent implements OnInit {

  showCircleGlyp: Boolean = false;
  // EventListeners del componente
  @HostListener('window:scroll') onWindowScroll() {
    this.showCircleGlyp = this._servicioAnimaciones.HideShowWindowScrollY(700);
  }

  constructor(private _servicioAnimaciones: ServicioanimacionesService) { }

  ngOnInit() {

  }

}
