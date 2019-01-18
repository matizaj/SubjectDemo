import { Component, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  productsBuy: Array<string> = [];
  constructor(private productService: ProductService) {
    productService.productBuyObs.subscribe(data => {
      this.productsBuy = data;
    });
   }

  ngOnInit() {
  }

}
