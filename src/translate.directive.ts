import { Input, Inject, Directive, ElementRef, DoCheck } from '@angular/core';
import { TranslateService } from './translate.service';

@Directive({
  selector: '[translate]'
})
export class TranslateDirective implements DoCheck {
  @Input('translate') lang: string;

  constructor( private elementref: ElementRef, private translate: TranslateService ){}

  ngDoCheck(){
    this.elementref.nativeElement.innerText = this.translate.instance(this.lang);
  }

}