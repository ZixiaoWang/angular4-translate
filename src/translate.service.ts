import { Injectable, Inject } from '@angular/core';
import { TranslateConfig } from './translate.config';
import * as flat from 'flat';
import { Observable, Observer, Subject } from 'rxjs/Rx';

@Injectable()
export class TranslateService {

  private config: any = {};
  private default: string = 'en';
  private current: string = this.default;

  constructor( @Inject(TranslateConfig) config: TranslateConfig ){
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

  public hasLanguage(key: string): boolean{
    let keySet = new Set(Object.keys(this.config));
    return keySet.has(key);
  }

  public instance(key: string, param?: any){
    if(param){
      return this.searchByKeyWithParams(key, param);
    }else{
      return this.searchByKey(key);
    }
  }

  public instanceFromObservable(key: string, param?: any): Observable<string>{
    let observer = Observable.create( _observer => {
      setTimeout(()=>{
        _observer.next(this.instance(key, param));
      }, 10000)
    });
    return observer;
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
    let expressionRegex = new RegExp(/{{[^{}]*}}/,'gi');

    let matchResult = content.match(expressionRegex);

    let paramFactory = function(expression: string){
      let varName = expression.replace(/{{\s*([\w$]+)\s*}}/g, '$1');
      if(parameter[varName]){
        return parameter[varName];
      }else{
        return expression;
      }
    }

    if( matchResult ){
      return content.replace(expressionRegex, (matchItem)=>{
        return paramFactory(matchItem);
      });
    }else{
      return content;
    }
  }
}