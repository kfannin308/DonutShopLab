import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Details, DonutService } from '../donut.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  public clearCart() {
    this.cartService.clearCart();
    window.alert('Your cart has be emptied!');
    location.reload();
  }
  public getItems() {

    this.cartService.getItems();
   

    console.log('Cart - Cart Items Total: ' + this.cartService.items.length.toString());
  }
  public removeFromCart(items: Details[], item: Details) {
    //console.log("hit removeFromCart code");
    console.log("hit removeFromCart code " + item.name);
    this.items = this.cartService.getItems();

    for (var i = 0; i < items.length; i++) {
      console.log("hit loop" + i.toString()) + " " + item.id.toString();
      if (items[i].id == item.id) {
        items.splice(i, 1);
        window.alert('Your donut has been removed from the cart!');
        console.log("Idx: " + i.toString());
        return;
      }

    }
    
    
  }
}
