import { LoginService } from "./../services/login.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  navDisplay = "d-none";
  bgColor = "transparent";
  userId: boolean | string;

  ngOnInit() {
    this.userId = this.loginService.userId;
  }

  toggleMobileNav() {
    this.navDisplay =
      this.navDisplay == "hideNav" || this.navDisplay == "d-none"
        ? "showNav"
        : "hideNav";
    this.bgColor = this.bgColor == "transparent" ? "#081d2a" : "transparent";
  }

  loggout(){
    this.loginService.userId = false;
    this.router.navigate([''])
  }
}
