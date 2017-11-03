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
var translate_directive_1 = require("./src/translate.directive");
var translate_pipe_1 = require("./src/translate.pipe");
var translate_config_1 = require("./src/translate.config");
var translate_service_1 = require("./src/translate.service");
var TranslateModule = /** @class */ (function () {
    function TranslateModule() {
    }
    TranslateModule_1 = TranslateModule;
    TranslateModule.forRoot = function (config) {
        return {
            ngModule: TranslateModule_1,
            providers: [
                { provide: translate_config_1.TranslateConfig, useValue: config }
            ]
        };
    };
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
    return TranslateModule;
    var TranslateModule_1;
}());
exports.TranslateModule = TranslateModule;
var translate_service_2 = require("./src/translate.service");
exports.TranslateService = translate_service_2.TranslateService;
