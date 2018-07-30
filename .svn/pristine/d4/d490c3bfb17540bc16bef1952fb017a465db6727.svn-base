(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["ng4-loading-bar"] = factory(require("@angular/core"), require("rxjs/Subject"));
	else
		root["ng4-loading-bar"] = factory(root["@angular/core"], root["rxjs/Subject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng4_loader_bar_utility__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularLoadingBarEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AngularLoadingBarEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AngularLoadingBarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularLoadingBarEventType;
(function (AngularLoadingBarEventType) {
    AngularLoadingBarEventType[AngularLoadingBarEventType["PROGRESS"] = 0] = "PROGRESS";
    AngularLoadingBarEventType[AngularLoadingBarEventType["HEIGHT"] = 1] = "HEIGHT";
    AngularLoadingBarEventType[AngularLoadingBarEventType["COLOR"] = 2] = "COLOR";
    AngularLoadingBarEventType[AngularLoadingBarEventType["VISIBLE"] = 3] = "VISIBLE";
    AngularLoadingBarEventType[AngularLoadingBarEventType["COMPLETE"] = 4] = "COMPLETE";
})(AngularLoadingBarEventType || (AngularLoadingBarEventType = {}));
var AngularLoadingBarEvent = (function () {
    function AngularLoadingBarEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return AngularLoadingBarEvent;
}());
var AngularLoadingBarService = (function () {
    function AngularLoadingBarService() {
        this._progress = 0;
        this._height = '2px';
        this._color = 'blue';
        this._visible = true;
        this._completed = false;
        this._intervalCounterId = 0;
        this._eventSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.interval = 500;
        this.internalCounterId = 0;
        this.events = this._eventSource.asObservable();
    }
    Object.defineProperty(AngularLoadingBarService.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (value) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng4_loader_bar_utility__["a" /* isPresent */])(value)) {
                if (value > 0) {
                    this._visible = true;
                }
                this._progress = value;
                this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.PROGRESS, this._progress));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularLoadingBarService.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng4_loader_bar_utility__["a" /* isPresent */])(value)) {
                this._height = value;
                this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.HEIGHT, this._height));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularLoadingBarService.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng4_loader_bar_utility__["a" /* isPresent */])(value)) {
                this._color = value;
                this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.COLOR, this._color));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularLoadingBarService.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng4_loader_bar_utility__["a" /* isPresent */])(value)) {
                this._visible = value;
                this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.VISIBLE, this._visible));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularLoadingBarService.prototype, "completed", {
        get: function () {
            return this._completed;
        },
        set: function (value) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng4_loader_bar_utility__["a" /* isPresent */])(value)) {
                this._completed = value;
                this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.VISIBLE, this._completed));
            }
        },
        enumerable: true,
        configurable: true
    });
    AngularLoadingBarService.prototype.emitEvent = function (event) {
        if (this._eventSource) {
            this._eventSource.next(event);
        }
    };
    AngularLoadingBarService.prototype.start = function (onCompleted) {
        var _this = this;
        if (onCompleted === void 0) { onCompleted = null; }
        this.stop();
        this.visible = true;
        this._intervalCounterId = setInterval(function () {
            var random = _this.getRandom(1, 10);
            _this.progress = _this.progress + Math.floor(Math.abs(random));
            if (_this.progress >= 100) {
                _this.complete();
            }
        }, this.interval);
    };
    AngularLoadingBarService.prototype.stop = function () {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    };
    AngularLoadingBarService.prototype.reset = function () {
        this.stop();
        this.progress = 0;
    };
    AngularLoadingBarService.prototype.complete = function () {
        var _this = this;
        this.progress = 100;
        this.stop();
        this.completed = true;
        setTimeout(function () {
            _this.visible = false;
            setTimeout(function () {
                _this.progress = 0;
            }, 250);
        }, 250);
    };
    AngularLoadingBarService.prototype.getRandom = function (min, max) {
        return Math.random() * (min - max);
    };
    AngularLoadingBarService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AngularLoadingBarService);
    return AngularLoadingBarService;
}());


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng4_loader_bar_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng4_loader_bar_utility__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularLoadingBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularLoadingBarComponent = (function () {
    function AngularLoadingBarComponent(service) {
        this.service = service;
        this.progress = '0';
        this.color = 'red';
        this.height = '2px';
        this.show = true;
    }
    AngularLoadingBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.events.subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_0__ng4_loader_bar_service__["a" /* AngularLoadingBarEventType */].PROGRESS && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ng4_loader_bar_utility__["a" /* isPresent */])(event.value)) {
                _this.progress = event.value;
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_0__ng4_loader_bar_service__["a" /* AngularLoadingBarEventType */].COLOR) {
                _this.color = event.value;
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_0__ng4_loader_bar_service__["a" /* AngularLoadingBarEventType */].HEIGHT) {
                _this.height = event.value;
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_0__ng4_loader_bar_service__["a" /* AngularLoadingBarEventType */].VISIBLE) {
                _this.show = event.value;
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AngularLoadingBarComponent.prototype, "progress", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AngularLoadingBarComponent.prototype, "color", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AngularLoadingBarComponent.prototype, "height", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AngularLoadingBarComponent.prototype, "show", void 0);
    AngularLoadingBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'ng4-loader-bar',
            template: "\n  <div class=\"ng4-loader-bar\">\n    <div class=\"ng4-loader-bar-progress\"\n    [style.width]=\"progress + '%'\"\n    [style.backgroundColor]=\"color\"\n    [style.color]=\"color\"\n    [style.height]=\"height\"\n    [style.opacity]=\"show ? '1' : '0'\"></div>\n  </div>  \n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ng4_loader_bar_service__["c" /* AngularLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__ng4_loader_bar_service__["c" /* AngularLoadingBarService */]) === 'function' && _a) || Object])
    ], AngularLoadingBarComponent);
    return AngularLoadingBarComponent;
    var _a;
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPresent;
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ng4_loader_bar_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ng4_loader_bar_service__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AngularLoadingBarComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng4_loader_bar_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AngularLoadingBarEventType", function() { return __WEBPACK_IMPORTED_MODULE_2__src_ng4_loader_bar_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AngularLoadingBarEvent", function() { return __WEBPACK_IMPORTED_MODULE_2__src_ng4_loader_bar_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AngularLoadingBarService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_ng4_loader_bar_service__["c"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularLoadingBarModule", function() { return AngularLoadingBarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AngularLoadingBarModule = (function () {
    function AngularLoadingBarModule() {
    }
    AngularLoadingBarModule.forRoot = function () {
        return {
            ngModule: AngularLoadingBarModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__src_ng4_loader_bar_service__["c" /* AngularLoadingBarService */]]
        };
    };
    AngularLoadingBarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__src_ng4_loader_bar_component__["a" /* AngularLoadingBarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__src_ng4_loader_bar_component__["a" /* AngularLoadingBarComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__src_ng4_loader_bar_service__["c" /* AngularLoadingBarService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularLoadingBarModule);
    return AngularLoadingBarModule;
}());


/***/ })
/******/ ]);
});