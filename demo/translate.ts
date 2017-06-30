import { Component } from '@angular/core';

import { TranslateService } from 'angular4-translate';

@Component({
  selector: 'translate',
  templateUrl: './translate.html'
})
export class TranslateComponent {
  private title = 'app';
  private count: number = 0;
  private translatedPhrase: string;
  private param = { event: 'watching movie', location:'cinema', time:'friday night' };

  constructor( private translate: TranslateService){
    this.translate.setDefault('en');
    this.translatedPhrase = this.translate.instance('PHRASE', this.param);
  }

  toggleLanguage(){
      let language = this.count % 2 === 1 ? 'en' : 'zh';

      this.translate.use(language);
      this.translatedPhrase = this.translate.instance('PHRASE', this.param);

      this.count ++;
  }

}
