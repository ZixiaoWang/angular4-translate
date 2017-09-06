import { NgModule, ModuleWithProviders, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateDirective } from './src/translate.directive';
import { TranslatePipe } from './src/translate.pipe';
import { TranslateConfig } from './src/translate.config';
import { TranslateService } from './src/translate.service';

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
  ],
  providers:[
    TranslateService
  ]
})
export class TranslateModule { 
  static forRoot(config: any): ModuleWithProviders{
    return {
      ngModule: TranslateModule,
      providers:[ 
        { provide: TranslateConfig, useValue: config }
       ]
    }
  }
}

export { TranslateService } from './src/translate.service';
