import { Component, OnInit, NgZone } from "@angular/core";
import {
  AbstractControl,
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../service/login.service";



@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.css"],
})
export class LoginformComponent implements OnInit {

  userName: string = "";
  password: string = "";
  // confirmPassword = "";

  loginForm: FormGroup;
  constructor(
    public lf: FormBuilder,
    private router: Router,
    private LoginService: LoginService,
    private ngZone: NgZone
  ) {  this.loginForm = this.lf.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  submitted: boolean = false;
 
  loginErrorMessage: string = '';

  onSubmit(): any {
    this.submitted = true;
    if (this.loginForm.invalid)
      return console.log(JSON.stringify(this.loginForm.value, null, 2));
    console.log(this.loginForm.value);
    if (this.loginForm.status === "VALID"){
      this.LoginService.userLogin(this.loginForm.value).subscribe(
      (res) => {
      console.log('Loggged in!', res);
      this.ngZone.run(() => this.router.navigateByUrl('/Home'));
      this.loginForm.reset();
      },
     (err) => {
      console.log('Error in login res', err.error);
      this.loginErrorMessage = err.error.error + '!!';
     }
      );
      } else {
      console.log('error from login ts');
      }
      }

}
