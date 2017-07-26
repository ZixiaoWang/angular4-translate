"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var translate_service_1 = require("./translate.service");
var TranslateDirective = (function () {
    function TranslateDirective(elementref, translate) {
        this.elementref = elementref;
        this.translate = translate;
    }
    TranslateDirective.prototype.ngDoCheck = function () {
        var view = this.elementref.nativeElement;
        if (view.innerText) {
            view.innerText = this.translate.instance(this.lang, this.param);
        }
        else if (view.text) {
            view.text = this.translate.instance(this.lang, this.param);
        }
    };
    return TranslateDirective;
}());
__decorate([
    core_1.Input('translate'),
    __metadata("design:type", String)
], TranslateDirective.prototype, "lang", void 0);
__decorate([
    core_1.Input('translate-param'),
    __metadata("design:type", Object)
], TranslateDirective.prototype, "param", void 0);
TranslateDirective = __decorate([
    core_1.Directive({
        selector: '[translate]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        translate_service_1.TranslateService])
], TranslateDirective);
exports.TranslateDirective = TranslateDirective;
//# sourceMappingURL=translate.directive.js.map