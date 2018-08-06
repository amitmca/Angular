"use strict";
var home_component_1 = require('./home.component');
var contact_component_1 = require('./contact.component');
var product_component_1 = require('./product.component');
var error_component_1 = require('./error.component');
exports.appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: error_component_1.ErrorComponent }
];
//# sourceMappingURL=app.routes.js.map