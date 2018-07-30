import { NgModule } from "@angular/core";
import { AngularLoadingBarComponent } from './src/ng4-loader-bar.component';
import { AngularLoadingBarService } from './src/ng4-loader-bar.service';
export * from './src/ng4-loader-bar.component';
export * from './src/ng4-loader-bar.service';
export var AngularLoadingBarModule = (function () {
    function AngularLoadingBarModule() {
    }
    AngularLoadingBarModule.forRoot = function () {
        return {
            ngModule: AngularLoadingBarModule,
            providers: [AngularLoadingBarService]
        };
    };
    AngularLoadingBarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AngularLoadingBarComponent],
                    exports: [AngularLoadingBarComponent],
                    providers: [AngularLoadingBarService]
                },] },
    ];
    /** @nocollapse */
    AngularLoadingBarModule.ctorParameters = function () { return []; };
    return AngularLoadingBarModule;
}());
