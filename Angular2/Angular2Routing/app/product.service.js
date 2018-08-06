"use strict";
var Product_1 = require('./Product');
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        var products;
        products = [
            new Product_1.Product(1, 'Memory Card', 500),
            new Product_1.Product(2, 'Pen Drive', 750),
            new Product_1.Product(3, 'Power Bank', 100)
        ];
        return products;
    };
    ProductService.prototype.getProduct = function (id) {
        var products = this.getProducts();
        return products.find(function (p) { return p.productID == id; });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map