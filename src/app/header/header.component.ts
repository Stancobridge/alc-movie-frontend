import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  navDisplay = "d-none"
  ngOnInit() {
  }


  toggleMobileNav(){
    this.navDisplay = this.navDisplay == "hideNav" || this.navDisplay == 'd-none'  ? "showNav" : "hideNav"
  }
}
