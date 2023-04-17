import { Component,EventEmitter} from "@angular/core";
import { ProductserviceService } from "../productservice.service";

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
  counter:number = 0;


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
    this.products = this.fruitsProducts.filter((a) => (a.productName==this.productfilter)||(a.productPrice==this.productfilter));  
  }

  addCart(){
    this.counter++
  }
}
