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
var ChildComponent = (function () {
    function ChildComponent() {
        this.message = "";
        console.log("ChildComponent:Constructor");
    }
    ChildComponent.prototype.ngOnChanges = function () {
        console.log("ChildComponent:OnChanges");
    };
    ChildComponent.prototype.ngOnInit = function () {
        console.log("ChildComponent:OnInit");
    };
    ChildComponent.prototype.ngDoCheck = function () {
        console.log("ChildComponent:DoCheck");
    };
    ChildComponent.prototype.ngAfterContentInit = function () {
        console.log("ChildComponent:AfterContentInit");
    };
    ChildComponent.prototype.ngAfterContentChecked = function () {
        console.log("ChildComponent:AfterContentChecked");
    };
    ChildComponent.prototype.ngAfterViewInit = function () {
        console.log("ChildComponent:AfterViewInit");
    };
    ChildComponent.prototype.ngAfterViewChecked = function () {
        console.log("ChildComponent:AfterViewChecked");
    };
    ChildComponent.prototype.ngOnDestroy = function () {
        console.log("ChildComponent:OnDestroy");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "message", void 0);
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-component',
            template: "\n <h2>Child Component</h2>\n "
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map