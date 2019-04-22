import { Directive, HostListener, ElementRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
  selector: '[appNumberonly]',
  providers:[DecimalPipe]
})
export class NumberonlyDirective {

  private el: any;

  constructor(
    private elementRef:ElementRef,
    private formatcurrencypipe:DecimalPipe
  ) { 
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit(){
    this.el.value = this.formatcurrencypipe.transform(this.el.value,'1.2-3');
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value:any) {
    this.el.value = this.formatcurrencypipe.transform(value,'1.2-3');
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    console.log('directive listens')
    let e = <KeyboardEvent> event;
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        
      }
    }
}
