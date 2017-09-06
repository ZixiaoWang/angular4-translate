"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var translate_service_1 = require("./translate.service");
var TranslatePipe = (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        return this.translate.instance(value, args);
    };
    return TranslatePipe;
}());
TranslatePipe = __decorate([
    core_1.Pipe({
        name: 'translate',
        pure: false
    }),
    __metadata("design:paramtypes", [translate_service_1.TranslateService])
], TranslatePipe);
exports.TranslatePipe = TranslatePipe;
