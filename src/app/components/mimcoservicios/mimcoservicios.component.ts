import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-mimcoservicios',
  templateUrl: './mimcoservicios.component.html',
  styleUrls: ['./mimcoservicios.component.scss'],
  animations: [
    trigger('fade-in', [
      state('normal', style({opacity: 0})),
      state('fade-in', style({opacity: 1})),
      transition('normal <=> fade-in', [
        animate(500)
      ])
    ])
  ]
})
export class MimcoserviciosComponent implements OnInit {

  showServiciosSection: String = 'normal';
  // EventListeners del componente
  @HostListener('window:scroll') onWindowScroll() {
    this.showServiciosSection = (window.scrollY < 1100 ? 'normal' : 'fade-in');
  }

  constructor() { }

  ngOnInit() {}
}
