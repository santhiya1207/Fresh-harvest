import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items: any[] = [];
  counters: number[] = [];

  addToCart(item: any) {
    this.items.push(item);
    this.counters.push(1);
    console.log('counters', this.counters);
  }

  removeFromCart(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.counters.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
  }

  getCounters() {
    return this.counters;
  }

  clearCart() {
    this.items = [];
    this.counters = [];
    return this.items;
  }

  setCounters(counters: number[]) {
    this.counters = counters;
  }

 
}

