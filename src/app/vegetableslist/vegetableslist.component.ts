import { Component,OnInit,NgZone, ViewChild, ElementRef } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { AbstractControl, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { CartServiceService } from '../cart-service.service';


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
  
  @ViewChild('myDiv') myDiv!: ElementRef;
  

  constructor(private _vegetablesProductsServie: ProductserviceService,
    private cartService: CartServiceService,
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

  productNames:string='';
  cartItemCount:number=0;
  cartItems:any[]=[];
  selectItem:any[]=[];

  onSubmit(item:any){
    this.selectItem=item;
    console.log("selectedItem", this.selectItem);
    console.log("filter",this.productNames)
    this.cartService.addToCart(this.selectItem);
    console.log(this.cartItemCount = this.cartService.getItems().length);
    console.log("cart",this.cartService.getItems())
    this.router.navigate(['/Cart']);
   
    // this.productNames = this.myDiv.nativeElement.innerHTML;
    
    //   console.log(this.cartitem.value);
    // console.log(this.myDiv.nativeElement.innerHTML);
    // console.log("product",this.productNames);
    // this.CartService.AddCart(this.cartitem.value).subscribe(
    //   ()=>{console.log('Data added');
    // this.ngZone.run(()=>this.router.navigate(['/Vegetables']));}
    // )

  }
}
