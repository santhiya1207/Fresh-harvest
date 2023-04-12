import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-vegetableslist',
  templateUrl: './vegetableslist.component.html',
  styleUrls: ['./vegetableslist.component.css']
})
export class VegetableslistComponent {
  vegetableProducts: any[] = [];
  filteredVegetableProducts: any[] = [];

  constructor(private _fruitsProductsServie: ProductserviceService) {
    console.log("Constructor Called");
  }
  ngOnInit() {
    this.vegetableProducts = this._fruitsProductsServie.getProduct();
    console.log("fruit", this.vegetableProducts);
    this.filteredVegetableProducts = this.vegetableProducts.filter(
      (fruit) => fruit.productCategory === "Fruits"
    );
    console.log("filtered fruits", this.filteredVegetableProducts);
  }
}
