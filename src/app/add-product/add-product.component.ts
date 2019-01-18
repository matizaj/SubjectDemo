import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProduct: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  add() {
    this.productService.receiveProduct(this.newProduct);
    this.newProduct = '';
  }

}
