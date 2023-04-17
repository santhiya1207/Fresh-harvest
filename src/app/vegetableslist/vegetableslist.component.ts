import { Component,OnInit,NgZone } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { AbstractControl, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { CartService } from '../cartService/cart.service';


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

  cartitem: FormGroup;
  



  constructor(private _vegetablesProductsServie: ProductserviceService,
    private CartService: CartService,
    private ct:FormBuilder,
    private ngZone:NgZone,
    private router:Router
    ) {
      this.cartitem = this.ct.group({
      productName:['']
    })
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

  productName:string='';

  onSubmit():any{
    console.log(this.cartitem.value);
    console.log("prduct",this.productName);
    this.CartService.AddCart(this.cartitem.value).subscribe(
      ()=>{console.log('Data added');
    this.ngZone.run(()=>this.router.navigate(['/Home']));}
    )

  }
}
