import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent {
  cartItems:any[]=[];
  productPrice:number= 0;
  counters: number[] = [];

  constructor(private cartService: CartServiceService) {
    console.log("cartItem",this.cartItems)
    this.cartItems = this.cartService.getItems();
    this.counters = this.cartService.getCounters();
    console.log("fgrr",this.counters);
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getItems();
  }

  updateCounter(index: number, increment: boolean) {
    if (increment) {
      this.counters[index]++;
    } else {
      if (this.counters[index] > 0) {
        this.counters[index]--;
      }
    }
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      total += this.counters[i] * this.cartItems[i].productPrice;
    }
    return total;
  }
}
