"use strict";
var Product_1 = require('./Product');
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        var products;
        products = [
            new Product_1.Product(1, 'Memory Card', 500),
            new Product_1.Product(1, 'Pen Drive', 750),
            new Product_1.Product(1, 'Power Bank', 100)
        ];
        return products;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map