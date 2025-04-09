import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBox]',
  standalone: true
})
export class BoxDirective {

  constructor(private el: ElementRef) {
    const style = el.nativeElement.style;
    style.border = '1px solid black';
    style.padding = '5px 10px';
    style.backgroundColor = 'white';
  }
}
