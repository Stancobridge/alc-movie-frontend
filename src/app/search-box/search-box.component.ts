import { Component, OnInit } from "@angular/core";
import {  Router } from "@angular/router";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.css"]
})
export class SearchBoxComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  doSearch(value: string) {
    this.router.navigate(["/search"], {queryParams: {
      q : value
    }})
  }
}
