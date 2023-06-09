import { Component,EventEmitter} from "@angular/core";
import { ProductserviceService } from "../service/productservice.service";
import { CartServiceService } from "../service/cart-service.service";

@Component({
  selector: "app-fruits-list",
  templateUrl: "./fruits-list.component.html",
  styleUrls: ["./fruits-list.component.css"],
})
export class FruitsListComponent {
  fruitsProducts: any[] = [];
  filteredFruitsProducts: any[] = [];
  products:any[]=[];
  productfilter: string = "";
  counter:number[] = [];


  constructor(private _fruitsProductsServie: ProductserviceService,
    private cartService:CartServiceService) {
    this.fruitsProducts = this._fruitsProductsServie.getProduct();
    console.log("Constructor Called");

    this.counter = Array(this.fruitsProducts.length).fill(0);
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
    this.products = this.fruitsProducts.filter((a) => (a.productName==this.productfilter)||(a.productPrice==this.productfilter));  
  }

  fruitsItem:any[]=[];

  onSubmit(item: any, index: number) {
    this.cartService.addToCart(item);
    this.counter[index]++;
    console.log(this.counter[index]);
  }
}
