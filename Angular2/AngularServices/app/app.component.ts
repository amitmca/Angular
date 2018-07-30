import {Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
   templateUrl: `app/app.component.html`,
    selector: 'my-app'
})


export class AppComponent {

    public title : string = 'Angular Service';

    products:Product[];
    productService;
 
    constructor(){
       this.productService=new ProductService();
    }
 
    getProducts() {
       this.products=this.productService.getProducts();
    }
}
