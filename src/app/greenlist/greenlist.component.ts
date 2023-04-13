import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-greenlist',
  templateUrl: './greenlist.component.html',
  styleUrls: ['./greenlist.component.css']
})
export class GreenlistComponent {
  grrensProducts: any[] = [];
  filteredGreensProducts: any[] = [];

  constructor(private _vegetablesProductsServie: ProductserviceService) {
    console.log("Constructor Called");
  }
  ngOnInit() {
    this.grrensProducts = this._vegetablesProductsServie.getProduct();
    this.filteredGreensProducts = this.grrensProducts.filter(
      (greens) => greens.productCategory === "Greens"
    );
  }
}
