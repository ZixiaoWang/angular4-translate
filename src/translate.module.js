"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var translate_service_1 = require("./translate.service");
var translate_directive_1 = require("./translate.directive");
var translate_pipe_1 = require("./translate.pipe");
var translate_config_1 = require("./translate.config");
var TranslateModule = TranslateModule_1 = (function () {
    function TranslateModule() {
    }
    TranslateModule.forRoot = function (config) {
        return {
            ngModule: TranslateModule_1,
            providers: [
                { provide: translate_config_1.TranslateConfig, useValue: config },
                { provide: translate_service_1.TranslateService, useClass: translate_service_1.TranslateService }
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
        ]
    })
], TranslateModule);
exports.TranslateModule = TranslateModule;
var TranslateModule_1;
//# sourceMappingURL=translate.module.js.map