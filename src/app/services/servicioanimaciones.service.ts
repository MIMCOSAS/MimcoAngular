import { Injectable } from '@angular/core';

@Injectable()
export class ServicioanimacionesService {

  constructor() {
    console.log('Servicio Listo');
  }
  HideShowWindowScrollY(positionYRef: number) {
    return window.scrollY < positionYRef ? false : true;
  }
}
