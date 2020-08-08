"use strict";
const Product_1 = require('./Product');
class ProductService {
    getProducts() {
        let products;
        products = [
            new Product_1.Product(1, 'Memory Card', 500),
            new Product_1.Product(2, 'Pen Drive', 750),
            new Product_1.Product(3, 'Power Bank', 100)
        ];
        return products;
    }
    getProduct(id) {
        let products = this.getProducts();
        return products.find(p => p.productID == id);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map