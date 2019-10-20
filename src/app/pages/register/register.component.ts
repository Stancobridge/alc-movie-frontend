import { ApiService } from "./../../services/api.service";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Http2ServerResponse } from "http2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  loading = false;
  successReg = false;
  errorMessage: string | boolean;
  btnClass = "btn-primary";
  @ViewChild("fullnameInput", {
    static: true
  })
  fullName: ElementRef<HTMLInputElement>;

  @ViewChild("emailInput", {
    static: true
  })
  emailInput: ElementRef<HTMLInputElement>;

  @ViewChild("password", {
    static: true
  })
  password: ElementRef<HTMLInputElement>;

  @ViewChild("verify_password", {
    static: true
  })
  verifyPassword: ElementRef<HTMLInputElement>;

  constructor(private http: HttpClient, private apiService: ApiService) {}

  ngOnInit() {}

  register() {
    this.successReg = false;
    this.errorMessage = false;
    this.loading = true;
    this.btnClass = "btn-success";
    const { value: fullname } = this.fullName.nativeElement;
    const { value: email } = this.emailInput.nativeElement;
    const { value: password } = this.password.nativeElement;
    const { value: verify_password } = this.verifyPassword.nativeElement;

    let payload = {
      fullname,
      email,
      password,
      verify_password
    };

    this.http
      .post(this.apiService.apiBase + "user/register", payload)
      .subscribe(
        (res: HttpResponse<any>) => {
          this.loading = false;
          this.btnClass = "btn-primary";
          this.successReg = true;
          this.errorMessage = false;
          console.log(res);
        },
        err => {
          this.successReg = false;
          this.errorMessage = err.error.error; 
          this.loading = false;
          this.btnClass = "btn-primary";
          
        }
      );
  }
}
