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
const platform_browser_1 = require('@angular/platform-browser');
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
const router_1 = require('@angular/router');
const app_component_1 = require('./app.component');
const home_component_1 = require('./home.component');
const contact_component_1 = require('./contact.component');
const product_component_1 = require('./product.component');
const error_component_1 = require('./error.component');
const product_service_1 = require('./product.service');
const app_routes_1 = require('./app.routes');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent, home_component_1.HomeComponent, contact_component_1.ContactComponent, product_component_1.ProductComponent, error_component_1.ErrorComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.appRoutes) /*path location strategy */
        ],
        providers: [product_service_1.ProductService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map