import { Injectable } from '@angular/core';

@Injectable()
export class ServicioanimacionesService {

  constructor() {
  }

  setThreeStateAnimationClass(triggerRef:Boolean, windowPosYRef: Number, claseEstatica: String, iniEstado: String, primEstado: String, segEstado: String ) {
    if (triggerRef) {
      if (window.scrollY > windowPosYRef) {
        return claseEstatica + " " + primEstado;
      }else {
        return claseEstatica + " " + segEstado;
      }
    } else {
      return claseEstatica + " " + iniEstado;
    }
  }
}
