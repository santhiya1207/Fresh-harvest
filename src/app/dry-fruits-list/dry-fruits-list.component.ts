import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-dry-fruits-list',
  templateUrl: './dry-fruits-list.component.html',
  styleUrls: ['./dry-fruits-list.component.css']
})
export class DryFruitsListComponent {
  dryFruitsProducts: any[] = [];
  filteredDryFruitsProducts: any[] = [];

  constructor(private _vegetablesProductsServie: ProductserviceService) {
    console.log("Constructor Called");
  }
  ngOnInit() {
    this.dryFruitsProducts = this._vegetablesProductsServie.getProduct();
    this.filteredDryFruitsProducts = this.dryFruitsProducts.filter(
      (dryFruits) => dryFruits.productCategory === "Dryfruits"
    );
  }
}
