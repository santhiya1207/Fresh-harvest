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
import { RegisterService } from "../service/register.service";
import Validation from "src/shared/Validation";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName: string = "";
  password: string = "";
  confirmPassword = "";

  registerForm: FormGroup;

  constructor(
    public lf: FormBuilder,
    private router: Router,
    private RegisterService: RegisterService,
    private ngZone: NgZone
  ) {
    this.registerForm = this.lf.group(
      {
        userName: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15),
          ],
        ],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],
        confirmPassword: ["", [Validators.required]],
      },
      {
        Validators: [Validation.match("password", "confirmPassword")],
      }
    );

 
  }

  ngOnInit(): void {}
  get r(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  registered: boolean = false;

  loginErrorMessage: string = '';
  
  successMessage: String = "";

  register() {
    this.registered = true;
    if (this.registerForm.invalid)
      return console.log(JSON.stringify(this.registerForm.value, null, 2));
    console.log(this.registerForm.value);
    // backend call
    if (this.registerForm.status === "VALID") {
      this.RegisterService.Register(this.registerForm.value).subscribe(
        (res) => {
          console.log("Response", res);
          this.successMessage = res.message;
          alert(this.successMessage)
          this.registerForm.reset();
          this.ngZone.run(() => this.router.navigateByUrl("/Login"));
        },
        (err) => {
          console.log("err", err);
          this.successMessage = err;
        }
      );
    } else {
      console.log("error from register ts");
    }
  }

}
