import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {

  userId;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.userId =  this.loginService.userId
  }

}
