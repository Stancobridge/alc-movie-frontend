import { LoginService } from "./../services/login.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isLoading = false;
  btnClass = "btn-primary";
  errorMessage: boolean | string = false;
  @ViewChild("emailInput", {
    static: true
  })
  emailInput: ElementRef<HTMLInputElement>;

  @ViewChild("password", {
    static: true
  })
  password: ElementRef<HTMLInputElement>;
  
  userId: string | boolean;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.userId =  this.loginService.userId
  }

  login() {
    this.btnClass = "btn-success";
    this.isLoading = true;
    this.errorMessage = false;
    const { value: password } = this.password.nativeElement;
    const { value: email } = this.emailInput.nativeElement;

    this.loginService.onLogin({ email, password }).subscribe(
      (res: {user}) => {
        // res
        this.btnClass = "btn-primary";
        this.isLoading = false;
        this.loginService.onLoginDetect.emit(res.user)
        console.log(res);
      },
      err => {
        this.btnClass = 'btn-primary'
        this.isLoading = false;
        this.errorMessage = err.error.error;
        console.log(this.errorMessage);
      }
    );
  }
}
