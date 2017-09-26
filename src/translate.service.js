"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var translate_config_1 = require("./translate.config");
var flat = require("flat");
var Rx_1 = require("rxjs/Rx");
var TranslateService = (function () {
    function TranslateService(_config) {
        this._config = _config;
        this.config = {};
        this.default = 'en';
        this.current = this.default;
        for (var key in this._config) {
            Object.defineProperty(this.config, key, { value: flat(this._config[key]) });
        }
    }
    TranslateService.prototype.setDefault = function (lang) {
        this.default = lang;
        this.use(this.default);
    };
    TranslateService.prototype.use = function (lang) {
        if (lang && this.config[lang]) {
            this.current = lang;
            return true;
        }
        else if (lang && !this.config[lang]) {
            return false;
        }
        else {
            return this.current;
        }
    };
    TranslateService.prototype.hasLanguage = function (key) {
        var keySet = new Set(Object.keys(this._config));
        return keySet.has(key);
    };
    TranslateService.prototype.instance = function (key, param) {
        if (param) {
            return this.searchByKeyWithParams(key, param);
        }
        else {
            return this.searchByKey(key);
        }
    };
    TranslateService.prototype.instanceFromObservable = function (key, param) {
        var _this = this;
        var observer = Rx_1.Observable.create(function (_observer) {
            setTimeout(function () {
                _observer.next(_this.instance(key, param));
            }, 10000);
        });
        return observer;
    };
    TranslateService.prototype.searchByKey = function (key) {
        if (this.config[this.current] &&
            this.config[this.current][key]) {
            return this.config[this.current][key];
        }
        else {
            return key;
        }
    };
    TranslateService.prototype.searchByKeyWithParams = function (key, param) {
        var content = this.searchByKey(key);
        var parameter = param;
        var expressionRegex = new RegExp(/{{[^{}]*}}/, 'gi');
        var matchResult = content.match(expressionRegex);
        var paramFactory = function (expression) {
            var varName = expression.replace(/{{\s*([\w$]+)\s*}}/g, '$1');
            if (parameter[varName]) {
                return parameter[varName];
            }
            else {
                return expression;
            }
        };
        if (matchResult) {
            return content.replace(expressionRegex, function (matchItem) {
                return paramFactory(matchItem);
            });
        }
        else {
            return content;
        }
    };
    return TranslateService;
}());
TranslateService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(translate_config_1.TranslateConfig)),
    __metadata("design:paramtypes", [translate_config_1.TranslateConfig])
], TranslateService);
exports.TranslateService = TranslateService;
