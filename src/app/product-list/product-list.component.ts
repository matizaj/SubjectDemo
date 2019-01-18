import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 products = [];
  constructor(private productService: ProductService) {
    console.log('product-list');
    this.productService.productListObs.subscribe( data => {
      console.log('productBuyObs' + data);
      this.products = data;
    });
  }

  ngOnInit() {
  }
  remove(product: string) {
    this.productService.remove(product);
  }

  buy(product: string) {
    this.productService.buy(product);
 }

}

