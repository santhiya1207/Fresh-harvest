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
  products:any[]=[];
  productfilter: string = "";

  constructor(private _vegetablesProductsServie: ProductserviceService) {
    console.log("Constructor Called");
  }
  ngOnInit() {
    this.vegetableProducts = this._vegetablesProductsServie.getProduct();
    this.filteredVegetableProducts = this.vegetableProducts.filter(
      (vegetable) => vegetable.productCategory === "Vegetables"
    );
  }
  getCategoryDetails(inputvalue: any): any {
    console.log(this.vegetableProducts);
    this.productfilter = inputvalue.target.value;
    this.products = this.vegetableProducts.filter((a) => (a.productName==this.productfilter)||(a.productPrice==this.productfilter));  
  }
}
