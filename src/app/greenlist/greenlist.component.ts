import { Component } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-greenlist',
  templateUrl: './greenlist.component.html',
  styleUrls: ['./greenlist.component.css']
})
export class GreenlistComponent {
  grrensProducts: any[] = [];
  filteredGreensProducts: any[] = [];
  products:any[]=[];
  productfilter: string = "";
  counter:number[] = [];

  constructor(private _greensProductsServie: ProductserviceService,
    private cartService:CartServiceService) {
    console.log("Constructor Called");
     this.grrensProducts = this._greensProductsServie.getProduct();
      this.counter = Array(this.grrensProducts.length).fill(0);
  }
  ngOnInit() {
   
    this.filteredGreensProducts = this.grrensProducts.filter(
      (greens) => greens.productCategory === "Greens"
    );
  }
  getCategoryDetails(inputvalue: any): any {
    console.log(this.grrensProducts);
    this.productfilter = inputvalue.target.value;
    this.products = this.grrensProducts.filter((a) => (a.productName==this.productfilter)||(a.productPrice==this.productfilter));  
  }

  greenItems:any[]=[];

 onSubmit(item: any, index: number) {
    this.cartService.addToCart(item);
    this.counter[index]++;
    console.log(this.counter[index]);
  }
}
