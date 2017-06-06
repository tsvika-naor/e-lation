import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[value]'
})
export class ValueDirective {
  @Input() value: any;

  constructor() { }

}