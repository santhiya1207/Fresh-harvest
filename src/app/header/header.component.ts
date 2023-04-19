import { Component, HostListener } from "@angular/core";
import { CartServiceService } from "../service/cart-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {

  counters: number[] = [];
  cartItems: any[] = [];

  constructor(private cartService:CartServiceService){
    this.cartItems = this.cartService.getItems();
    this.counters = this.cartService.getCounters();
    console.log("fgrr", this.counters.length);
  }

  

  logsrc = "/assets/logo.png";

  isScrolled = false;

  @HostListener('window:scroll', [])
onWindowScroll() {
  this.isScrolled = window.scrollY > 0;
}
}
