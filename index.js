"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var translate_directive_1 = require("./src/translate.directive");
var translate_pipe_1 = require("./src/translate.pipe");
var translate_config_1 = require("./src/translate.config");
var translate_service_1 = require("./src/translate.service");
var TranslateModule = TranslateModule_1 = (function () {
    function TranslateModule() {
    }
    TranslateModule.forRoot = function (config) {
        return {
            ngModule: TranslateModule_1,
            providers: [
                { provide: translate_config_1.TranslateConfig, useValue: config }
            ]
        };
    };
    return TranslateModule;
}());
TranslateModule = TranslateModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            translate_directive_1.TranslateDirective,
            translate_pipe_1.TranslatePipe
        ],
        exports: [
            translate_directive_1.TranslateDirective,
            translate_pipe_1.TranslatePipe
        ],
        providers: [
            translate_service_1.TranslateService
        ]
    })
], TranslateModule);
exports.TranslateModule = TranslateModule;
var translate_service_2 = require("./src/translate.service");
exports.TranslateService = translate_service_2.TranslateService;
var TranslateModule_1;
