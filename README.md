# angular4-translate
A translate module for Angular2/Angular4 Projects.

### How to install it?
``` npm install --save angular4-translate ```

### How to use it?
Import ```TranslateModule``` and ```TranslateModule.forRoot(Dictionary)```

**app.module.ts**  
```javascript
    import { TranslateModule, TranslateService } from 'angular4-translate';

    const dictionary: any = {
        en: {
            PHRASE: 'I was {{ event }} in {{ location }} at {{ time }}',
            PARAMS: {
                EVENT: 'studying',
                LOCATION: 'library',
                TIME:'saturday'
            }
        },
        zh: {
            PHRASE: '我{{ time }}在{{ location }}{{ event }}',
            PARAMS: {
                EVENT: '学习',
                LOCATION: '图书馆',
                TIME: '礼拜六'
            }
        }
    };

    @NgModule({
        declarations:[...],
        imports:[
            ...
            TransalteModule.forRoot(dictionary),
            ...
        ],
        providers:[...],
        ...
    })

    export class AppModule{

        constructor( private translate: TranslateService ){
            this.translate.setDefault('en');
        }
    }
```

#### Use Pipe
translate.html
```html
    <div>{{ 'PARAMS.EVENT' | translate }}</div> 
    <div>{{ 'PHRASE' | translate: { event: 'shopping', location: 'mall', time: 'Sunday' } }}</div> 
    <div>{{ 'PHRASE' | translate: params }}</div>
```
translate.ts
```javascript
    export class TranslateComponent{
        params: any = {
            event: 'Having Dinner',
            location: 'KFC',
            time: 'Tuesday'
        }
    }
```

#### Use Directive
translate.html
```html
    <div translate="PARAMS.LOCATION"></div>
    <div translate="PHRASE" [translate-param]="{ event: 'reading', location: 'library', time: 'friday' }"></div>
    <div translate="params"></div>
```
translate.ts
```javascript
    export class TranslateComponent{
        params: any = {
            event: 'Having Dinner',
            location: 'KFC',
            time: 'Tuesday'
        }
    }
```

#### Use Control Code
translate.html
```html
    <h1>{{ translatedPhrase }}</h1>
```
translate.ts
```javascript
    import { TranslateService } from 'angular4-translate';

    export class TranslateComponent{
        private translatedPhrase: string;

        constructor( private translateService: TranslateService ){
            this.translatedPhrase = this.translateService.instance('PHRASE', { event: 'sleep', location: 'home', time: 'midnight' });
        }
    }
```

### Effect
![Final Effect](./translate.gif)

### TODO LIST
1. ~~Support Parameters in translating sentences;~~
2. Support NativeScript Projects;

### License
[MIT](https://opensource.org/licenses/MIT)