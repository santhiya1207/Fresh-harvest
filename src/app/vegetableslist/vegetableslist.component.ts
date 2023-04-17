import { Component,OnInit,NgZone } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { AbstractControl, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

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

  constructor(private _vegetablesProductsServie: ProductserviceService,) {
  }
  ngOnInit() {
    this.vegetableProducts = this._vegetablesProductsServie.getProduct();
    this.filteredVegetableProducts = this.vegetableProducts.filter(
      (vegetable) => vegetable.productCategory === "Vegetables"
    );
    console.log("ngoninit", this.filteredVegetableProducts.filter((a)=>a.productName))
  }
  getCategoryDetails(inputvalue: any): any {
    console.log(this.vegetableProducts);
    console.log("hi",this.products = this.vegetableProducts.filter((a) => (a.productName==this.productfilter)||(a.productPrice==this.productfilter)) )
    this.productfilter = inputvalue.target.value;
    
  }
}
