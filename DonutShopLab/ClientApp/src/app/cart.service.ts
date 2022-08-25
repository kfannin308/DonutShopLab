import { Injectable, Input, Output } from '@angular/core';
import { Details} from './donut.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Details[] = [];
  constructor() { }

  addToCart(details: Details) {
    this.items.push(details);
  }

  getItems() {
    return this.items;
    console.log('Service - Cart Items Total: ' + this.items.length.toString());
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
