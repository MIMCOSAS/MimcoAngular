import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  //@Input('scrollYNav') scrollYPosition: number;
  //@ViewChild('navbarBrand') myNavBar: any;
  constructor() { }

  ngOnInit() {
    //console.log(this.scrollYPosition);
  }

  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //console.log(changes);
    //console.log(this.myNavBar);
  }
}
