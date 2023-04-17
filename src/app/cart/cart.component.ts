import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl:"./cart.Component.html",
  styleUrls:['./cart.Component.css'],
})
export class CartComponent {
  
  cartItems:any[]=[];

  constructor(private cartService: CartServiceService) {
    console.log("cartItem",this.cartItems)
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getItems();
  }
}
