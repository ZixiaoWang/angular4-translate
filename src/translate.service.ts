import { Injectable, Inject } from '@angular/core';
import * as flat from 'flat';

@Injectable()
export class TranslateService {

  private config: any = {};
  private default: string = 'en';
  private current: string = this.default;

  constructor( config: any ){
    for(let key in config){
      Object.defineProperty(this.config, key, { value: flat(config[key]) } )
    }
  }

  public setDefault(lang: string){
    this.default = lang;
    this.use(this.default);
  }

  public use(lang?: string){
    if( lang && this.config[lang] ){
      this.current = lang;
      return true;
    }else if( lang && !this.config[lang] ){
      return false;
    }else{
      return this.current;
    }
  }

  public instance(key: string, param?: any){
    if(param){
      return this.searchByKeyWithParams(key, param);
    }else{
      return this.searchByKey(key);
    }
  }

  private searchByKey(key: string){
    if( 
      this.config[this.current] &&
      this.config[this.current][key] ){
      return this.config[this.current][key];
    }else{
      return key;
    }
  }

  private searchByKeyWithParams(key: string, param: any){
    let content = this.searchByKey(key);
    let parameter = param;
    if( !/{{.*}}/gi.test(content) ){
      return content;
    }else{
      return 'has params'
    }
  }
}