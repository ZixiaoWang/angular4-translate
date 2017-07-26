import { Input, Inject, Directive, ElementRef, DoCheck } from '@angular/core';
import { TranslateService } from './translate.service';

@Directive({
  selector: '[translate]'
})
export class TranslateDirective implements DoCheck {
  @Input('translate') lang: string;
  @Input('translate-param') param: any;

  constructor( 
    private elementref: ElementRef, 
    private translate: TranslateService ){}

  ngDoCheck(){
    let view = this.elementref.nativeElement;
    if(view.innerText){
      view.innerText = this.translate.instance(this.lang, this.param);
    }else if(view.text){
      view.text = this.translate.instance(this.lang, this.param);
    }
  }

}
