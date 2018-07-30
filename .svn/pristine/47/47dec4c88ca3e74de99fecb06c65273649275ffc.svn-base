import { AngularLoadingBarService, AngularLoadingBarEventType } from './ng4-loader-bar.service';
import { Component, Input } from '@angular/core';
import { isPresent } from "./ng4-loader-bar.utility";
export var AngularLoadingBarComponent = (function () {
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
            if (event.type === AngularLoadingBarEventType.PROGRESS && isPresent(event.value)) {
                _this.progress = event.value;
            }
            else if (event.type === AngularLoadingBarEventType.COLOR) {
                _this.color = event.value;
            }
            else if (event.type === AngularLoadingBarEventType.HEIGHT) {
                _this.height = event.value;
            }
            else if (event.type === AngularLoadingBarEventType.VISIBLE) {
                _this.show = event.value;
            }
        });
    };
    AngularLoadingBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng4-loader-bar',
                    template: "\n  <div class=\"ng4-loader-bar\">\n    <div class=\"ng4-loader-bar-progress\"\n    [style.width]=\"progress + '%'\"\n    [style.backgroundColor]=\"color\"\n    [style.color]=\"color\"\n    [style.height]=\"height\"\n    [style.opacity]=\"show ? '1' : '0'\"></div>\n  </div>  \n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    AngularLoadingBarComponent.ctorParameters = function () { return [
        { type: AngularLoadingBarService, },
    ]; };
    AngularLoadingBarComponent.propDecorators = {
        'progress': [{ type: Input },],
        'color': [{ type: Input },],
        'height': [{ type: Input },],
        'show': [{ type: Input },],
    };
    return AngularLoadingBarComponent;
}());
