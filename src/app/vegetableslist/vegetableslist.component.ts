import {
  Component,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ProductserviceService } from "../service/productservice.service";
import { CartServiceService } from "../service/cart-service.service";

@Component({
  selector: "app-vegetableslist",
  templateUrl: "./vegetableslist.component.html",
  styleUrls: ["./vegetableslist.component.css"],
})
export class VegetableslistComponent {
  vegetableProducts: any[] = [];
  filteredVegetableProducts: any[] = [];
  products: any[] = [];
  productfilter: string = "";
  counter:number[] = []


  @ViewChild("myDiv") myDiv!: ElementRef;

  constructor(
    private _vegetablesProductsServie: ProductserviceService,
    private cartService: CartServiceService,) {
      this.vegetableProducts = this._vegetablesProductsServie.getProduct();
      this.counter = Array(this.vegetableProducts.length).fill(0);
  }

  ngOnInit() {
    
    this.filteredVegetableProducts = this.vegetableProducts.filter(
      (vegetable) => vegetable.productCategory === "Vegetables"
    );
  }

  getCategoryDetails(inputvalue: any): any {
    this.productfilter = inputvalue.target.value;
    this.products = this.vegetableProducts.filter((a) =>
          (a.productName == this.productfilter) ||
          (a.productPrice == this.productfilter)
      );
  }


  vegetableItem:any[]=[];

  onSubmit(item: any, index: number) {
    this.cartService.addToCart(item);
    this.counter[index]++;
    console.log(this.counter[index]);
  }
}
