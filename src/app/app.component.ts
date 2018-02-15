import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //scrollYPosition: number;
  constructor(){
    /*window.addEventListener('scroll', ()=>{
      this.scrollYPosition = window.scrollY;
    });*/
  }
  ngOnInit(){
    //this.scrollYPosition = window.scrollY;
  }
}
