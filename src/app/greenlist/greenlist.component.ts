import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CartServiceService } from '../cart-service.service';

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

  constructor(private _vegetablesProductsServie: ProductserviceService,
    private cartService:CartServiceService) {
    console.log("Constructor Called");
  }
  ngOnInit() {
    this.grrensProducts = this._vegetablesProductsServie.getProduct();
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

  onSubmit(item:any){
    this.greenItems=item;
    this.cartService.addToCart(this.greenItems);
  }
}
