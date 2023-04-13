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

  constructor(private _vegetablesProductsServie: ProductserviceService) {
    console.log("Constructor Called");
  }
  ngOnInit() {
    this.vegetableProducts = this._vegetablesProductsServie.getProduct();
    this.filteredVegetableProducts = this.vegetableProducts.filter(
      (vegetable) => vegetable.productCategory === "Vegetables"
    );
  }
}
