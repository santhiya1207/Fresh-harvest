import { Component } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-dry-fruits-list',
  templateUrl: './dry-fruits-list.component.html',
  styleUrls: ['./dry-fruits-list.component.css']
})
export class DryFruitsListComponent {
  dryFruitsProducts: any[] = [];
  filteredDryFruitsProducts: any[] = [];
  products:any[]=[];
  productfilter: string = "";
  counter:number[] = [];

  constructor(private _dryFruitsProductsServie: ProductserviceService,
    private cartService:CartServiceService) {
    console.log("Constructor Called");
    this.dryFruitsProducts = this._dryFruitsProductsServie.getProduct();
    this.counter = Array(this.dryFruitsProducts.length).fill(0);
  }
  ngOnInit() {
    
    this.filteredDryFruitsProducts = this.dryFruitsProducts.filter(
      (dryFruits) => dryFruits.productCategory === "Dryfruits"
    );
  }
  getCategoryDetails(inputvalue: any): any {
    console.log(this.dryFruitsProducts);
    this.productfilter = inputvalue.target.value;
    this.products = this.dryFruitsProducts.filter((a) => (a.productName==this.productfilter)||(a.productPrice==this.productfilter));  
  }

  dryFruitsItem:any[]=[];

  onSubmit(item: any, index: number) {
    this.cartService.addToCart(item);
    this.counter[index]++;
    console.log(this.counter[index]);
  }
}
