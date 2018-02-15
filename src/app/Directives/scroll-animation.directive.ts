import { Directive, ElementRef, HostBinding, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
  initialClassOnElement: string;
  @Input() firstClassAnimation: string = 'fade-out ';
  @Input() secondClassAnimation: string = 'fade-in ';
  @Input() posYTrigger: number = 20;
  @HostBinding ('class') classOnElement: string;

  @HostListener('window:scroll') onWindowScroll(){
    console.log(this.classOnElement);
    if(window.scrollY < this.posYTrigger){
      this.classOnElement = this.firstClassAnimation + " " + this.initialClassOnElement;
    }
    else{
      this.classOnElement = this.secondClassAnimation + " " + this.initialClassOnElement;
    }
  }

  constructor(private myDomElement: ElementRef) { 
    console.log(myDomElement);
    this.initialClassOnElement = myDomElement.nativeElement.className;
  }

}
