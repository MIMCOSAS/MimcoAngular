import { Component, OnInit } from '@angular/core';
import { ServicioanimacionesService } from '../../../services/servicioanimaciones.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private _servicioAnimaciones: ServicioanimacionesService) { }

  ngOnInit() {
  }

  test(){
    this._servicioAnimaciones.imprimirAlgo();
  }
}
