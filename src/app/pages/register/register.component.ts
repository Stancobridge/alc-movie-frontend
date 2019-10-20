import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ContentChild('#fullnameInput', {
    static: true
  }) fullName: ElementRef<HTMLInputElement>; 
  constructor() { }

  ngOnInit() {
  }

  register(){
    // const {value} = this.fullnName.nativeElement
    console.log(this.fullName)
  }
}
