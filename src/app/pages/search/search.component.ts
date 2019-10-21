import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./../../services/movies.service";
import { ActivatedRoute, Params } from "@angular/router";
import { MovieModel } from "src/app/models/movie.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchResult: MovieModel[];
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    let searchValue = this.route.snapshot.queryParams["q"];

    this.searchResult = this.moviesService.movies.filter(vid => {
      if (searchValue == "" || !this.route.snapshot.queryParams["q"]) return;
      let reg = new RegExp(searchValue, "gmi");
      if (vid.title.search(reg) > -1) {
        return vid;
      }
    });

    this.route.queryParams.subscribe((params: Params) => {
      searchValue = params["q"];
      this.searchResult = this.moviesService.movies.filter(vid => {
        if (searchValue == "" || !this.route.snapshot.queryParams["q"]) return;
        let reg = new RegExp(searchValue, "gmi");
        if (vid.title.search(reg) > -1) {
          return vid;
        }
      });
    });
    // console.log(this.searchResult);
  }
}
