import {Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';
import { LoggerService } from './logger.service';
import { Product } from './product';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [ProductService, LoggerService]
})

export class AppComponent{
    products:Product[];
    
    constructor(private productService:ProductService) { }
    
    getProducts() {
        this.products=this.productService.getProducts();
    }
}

