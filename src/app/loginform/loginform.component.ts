import { Component,OnInit,NgZone } from '@angular/core';
import { AbstractControl, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  })
export class LoginformComponent implements OnInit{
  loginpage:boolean=true;
  siginpage:boolean=false;

  hidecontent(valid:boolean){
      this.loginpage = valid;
      this.siginpage = true;
  }

  showcontent(valid:boolean){
    this.loginpage = true;
    this.siginpage = valid;
  }

  // form group
  // loginform=new FormGroup({
  //   userName:new FormControl(''),
  //   password:new FormControl(''),
    
  // })

  loginform :FormGroup;

  constructor (public lf:FormBuilder,
    private router:Router,
    private LoginService:LoginService, 
    private ngZone:NgZone){
      this.loginform=this.lf.group({
        userName:['',[Validators.required]],
        password:['',[Validators.required]],
       
    })
    }

  ngOnInit(): void {
   
  }
  get f():{[key:string]:AbstractControl}{
    return this.loginform.controls;
  }
  submitted:boolean=false;


  userName:string='';
  password:string='';
 

  // onSubmit():void{
  //   this.submitted=true;
  //   if(this.loginform.invalid)
  //   return console.log(JSON.stringify(this.loginform.value,null,2));
   
  //   // valid the user and navigate to home page
  //   if(this.username=='admin' && this.password=='admin'){
  //     alert("Login Successfull");
  //     this.loginform.reset();
  //     this.router.navigate(['/Home']);
  //   }
  //   else{
  //     alert("Invalid data");
  //   }

  // }


 

  onSubmit():any{
    this.submitted=true;
    if(this.loginform.invalid)
    return console.log(JSON.stringify(this.loginform.value,null,2));
    console.log(this.loginform.value);
    this.LoginService.AddLogin(this.loginform.value).subscribe(
      ()=>{console.log('Data added');
    this.ngZone.run(()=>this.router.navigate(['/Home']));}
    )

  }







}
