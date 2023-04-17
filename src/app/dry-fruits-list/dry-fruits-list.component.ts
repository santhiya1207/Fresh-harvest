import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CartServiceService } from '../cart-service.service';

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

  constructor(private _vegetablesProductsServie: ProductserviceService,
    private cartService:CartServiceService) {
    console.log("Constructor Called");
  }
  ngOnInit() {
    this.dryFruitsProducts = this._vegetablesProductsServie.getProduct();
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

  onSubmit(item:any){
    this.dryFruitsItem=item;
    this.cartService.addToCart(this.dryFruitsItem);
  }
}
