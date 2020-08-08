"use strict";
const home_component_1 = require('./home.component');
const contact_component_1 = require('./contact.component');
const product_component_1 = require('./product.component');
const error_component_1 = require('./error.component');
const product_detail_component_1 = require('./product-detail.component');
exports.appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'product', component: product_component_1.ProductComponent,
        children: [
            { path: 'detail/:id', component: product_detail_component_1.ProductDetailComponent }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: error_component_1.ErrorComponent }
];
//# sourceMappingURL=app.routes.js.map