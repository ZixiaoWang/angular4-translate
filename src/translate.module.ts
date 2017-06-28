import { NgModule, ModuleWithProviders, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateService } from './translate.service';
import { TranslateDirective } from './translate.directive';
import { TranslatePipe } from './translate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    TranslateDirective,
    TranslatePipe
  ],
  exports:[
    TranslateDirective,
    TranslatePipe
  ]
})
export class TranslateModule { 
  static forRoot(config: any): ModuleWithProviders{
    return {
      ngModule: TranslateModule,
      providers:[ 
        { provide: TranslateService, useValue: new TranslateService(config) }
       ]
    }
  }
}
