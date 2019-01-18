import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = [
  //   new Product('kajak', 999),
  //   new Product('buty', 250),
  //   new Product('pika', 29.9),
  // ];

  products: Array<string> = [
    'kromczi', 'kiki', 'gigi'
  ];

  productList: Array<string> = [];
  productBuy: Array<string> = [];
  productListObs = new Subject<Array<string>>();
  productBuyObs = new Subject<Array<string>>();
  // productListObs = new BehaviorSubject<Array<string>>(this.productList);
  // productBuyObs = new BehaviorSubject<Array<string>>(this.productBuy);

  constructor() {
    console.log('service');
    this.productListObs.next(this.products);
  }

  // getProducts() {
  //   return this.products;
  // }

  // getProduct(id: number) {
  //   return this.products[id];
  // }

  // addProduct(newProduct: Product) {
  //   this.products.push(newProduct);
  // }

  // removeProduct(id: Product) {
  //   this.products.filter(e => e !== id );
  // }

  // updateProduct(id: number, newProduct: Product) {
  //   this.products[id] = newProduct;
  // }

   newProduct: string;


    remove(product: string) {
      this.productList = this.productList.filter( e => e !== product);
      this.productListObs.next(this.productList);
    }
    buy(product: string) {
      this.productBuy.push(product);
      this.remove(product);
      this.productBuyObs.next(this.productBuy);
    }

    receiveProduct(product: string) {
      this.productList.push(product);
      this.productListObs.next(this.productList);
    }
}
