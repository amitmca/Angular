"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.displayChild = false;
        console.log("AppComponent:Constructor");
    }
    AppComponent.prototype.toggle = function () {
        this.displayChild = !this.displayChild;
    };
    AppComponent.prototype.ngOnChanges = function () {
        console.log("AppComponent:OnChanges");
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log("AppComponent:OnInit");
    };
    AppComponent.prototype.ngDoCheck = function () {
        console.log("AppComponent:DoCheck");
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        console.log("AppComponent:AfterContentInit");
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        console.log("AppComponent:AfterContentChecked");
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log("AppComponent:AfterViewInit");
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        console.log("AppComponent:AfterViewChecked");
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log("AppComponent:OnDestroy");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h2>Life Cycle Hook</h2>\n      <button (click)=\"toggle()\">Hide/Show Child </button>\n      <child-component *ngIf=\"displayChild\"  [message]=\"'Hello'\" ></child-component>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map