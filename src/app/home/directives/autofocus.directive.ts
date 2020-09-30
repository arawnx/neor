import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  constructor(private el: ElementRef) { }

  public ngAfterContentInit() {
    setTimeout(_ => {
      this.el.nativeElement.focus();
    })
  }
}
