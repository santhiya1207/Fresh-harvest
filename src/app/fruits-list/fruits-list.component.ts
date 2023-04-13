import { Component,EventEmitter} from "@angular/core";
import { ProductserviceService } from "../productservice.service";

@Component({
  selector: "app-fruits-list",
  templateUrl: "./fruits-list.component.html",
  styleUrls: ["./fruits-list.component.css"],
})
export class FruitsListComponent {
  fruitsProducts: any[] = [];
  products: any[] = [];
  filteredFruitsProducts: any[] = [];
  productfilter: string = "";
  productfilter1:boolean=false;
  productfilter2:boolean=false;
  productfilter3:boolean=false;

  price1(){
    this.products = this.fruitsProducts.filter(product => {
     product.productPrice >= 1 && product.productPrice <= 49
    });
    return this.products;
  }
  price2(){
    this.products = this.fruitsProducts.filter(product => {
     product.productPrice >= 50 && product.productPrice <= 99
    });
    return this.products;
  }
  price3(){
    this.products = this.fruitsProducts.filter(product => {
      product.productPrice >= 100 && product.productPrice <= 499
    });
    return this.products;
  }
  price4(){
    this.products = this.fruitsProducts.filter(product => {
      return product.productPrice >= 500 && product.productPrice <= 10000
    });
  }

  constructor(private _fruitsProductsServie: ProductserviceService) {
    this.fruitsProducts = this._fruitsProductsServie.getProduct();
    console.log("Constructor Called");
  }
  ngOnInit() {
    console.log("fruit", this.fruitsProducts);
    this.filteredFruitsProducts = this.fruitsProducts.filter(
      (fruit) => fruit.productCategory === "Fruits"
    );
    console.log("filtered fruits", this.filteredFruitsProducts);
  }
  getCategoryDetails(inputvalue: any): any {
    console.log(this.fruitsProducts);
    this.productfilter = inputvalue.target.value;
    this.products = this.fruitsProducts.filter((a) => (a.productName==this.productfilter)||(a.productPrice==this.products));  
  }
}
