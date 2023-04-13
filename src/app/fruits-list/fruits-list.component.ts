import { Component } from "@angular/core";
import { ProductserviceService } from "../productservice.service";

@Component({
  selector: "app-fruits-list",
  templateUrl: "./fruits-list.component.html",
  styleUrls: ["./fruits-list.component.css"],
})
export class FruitsListComponent {
  fruitsProducts: any[] = [];
  filteredFruitsProducts: any[] = [];

  constructor(private _fruitsProductsServie: ProductserviceService) {
    console.log("Constructor Called");
  }
  ngOnInit() {
    this.fruitsProducts = this._fruitsProductsServie.getProduct();
    console.log("fruit", this.fruitsProducts);
    this.filteredFruitsProducts = this.fruitsProducts.filter(
      (fruit) => fruit.productCategory === "Fruits"
    );
    console.log("filtered fruits", this.filteredFruitsProducts);
  }
}
