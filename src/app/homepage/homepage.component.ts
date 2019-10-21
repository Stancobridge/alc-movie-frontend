import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userId
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.userId =  this.loginService.userId
  }

  
}
