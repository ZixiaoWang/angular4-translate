"use strict";
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
        else if (view._isViewBase) {
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
    __param(1, core_1.Inject(translate_service_1.TranslateService)),
    __metadata("design:paramtypes", [core_1.ElementRef,
        translate_service_1.TranslateService])
], TranslateDirective);
exports.TranslateDirective = TranslateDirective;
