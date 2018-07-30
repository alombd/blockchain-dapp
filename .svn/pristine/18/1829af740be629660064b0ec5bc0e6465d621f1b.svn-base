import { Injectable } from '@angular/core';
import { isPresent } from './ng4-loader-bar.utility';
import { Subject } from 'rxjs/Subject';
export var AngularLoadingBarEventType;
(function (AngularLoadingBarEventType) {
    AngularLoadingBarEventType[AngularLoadingBarEventType["PROGRESS"] = 0] = "PROGRESS";
    AngularLoadingBarEventType[AngularLoadingBarEventType["HEIGHT"] = 1] = "HEIGHT";
    AngularLoadingBarEventType[AngularLoadingBarEventType["COLOR"] = 2] = "COLOR";
    AngularLoadingBarEventType[AngularLoadingBarEventType["VISIBLE"] = 3] = "VISIBLE";
    AngularLoadingBarEventType[AngularLoadingBarEventType["COMPLETE"] = 4] = "COMPLETE";
})(AngularLoadingBarEventType || (AngularLoadingBarEventType = {}));
export var AngularLoadingBarEvent = (function () {
    function AngularLoadingBarEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return AngularLoadingBarEvent;
}());
export var AngularLoadingBarService = (function () {
    function AngularLoadingBarService() {
        this._progress = 0;
        this._height = '2px';
        this._color = 'blue';
        this._visible = true;
        this._completed = false;
        this._intervalCounterId = 0;
        this._eventSource = new Subject();
        this.interval = 500;
        this.internalCounterId = 0;
        this.events = this._eventSource.asObservable();
    }
    Object.defineProperty(AngularLoadingBarService.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (value) {
            if (isPresent(value)) {
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
            if (isPresent(value)) {
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
            if (isPresent(value)) {
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
            if (isPresent(value)) {
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
            if (isPresent(value)) {
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
    AngularLoadingBarService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AngularLoadingBarService.ctorParameters = function () { return []; };
    return AngularLoadingBarService;
}());
