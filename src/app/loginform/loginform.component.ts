import { Component } from '@angular/core';
import { AbstractControl, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
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
  loginform=new FormGroup({
    userName:new FormControl(''),
    password:new FormControl('')
  })

  constructor (private lf:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.loginform=this.lf.group({
        userName:['',[Validators.required]],
        password:['',[Validators.required]]
    })
  }
  get f():{[key:string]:AbstractControl}{
    return this.loginform.controls;
  }
  submitted:boolean=false;


  username:string='';
  password:string='';
 

  onSubmit():void{
    this.submitted=true;
    if(this.loginform.invalid)
    return console.log(JSON.stringify(this.loginform.value,null,2));
   

    // valid the user and navigate to home page
    if(this.username=='admin' && this.password=='admin'){
      alert("Login Successfull");
      this.loginform.reset();
      this.router.navigate(['/home']);
    }
    else{
      alert("Invalid data");
    }

  }








}
