import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

constructor(private router:Router){}

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

   userName:string ='';
   password:string ='';
 
login() {
    if(this.userName == 'admin' && this.password == 'admin'){
    this.router.navigate(['/home']);
    alert("Login Successfully");
  }
  else{
    console.log("userName",this.userName);
    alert("Invalid Credentials")
  }
  // console.log('name',this.userName);
}


}
