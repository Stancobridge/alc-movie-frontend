import { FavouriteVidsService } from "./../../services/favourite.service";
import { Component, OnInit } from "@angular/core";
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: "app-fav-videos",
  templateUrl: "./fav-videos.component.html",
  styleUrls: ["./fav-videos.component.css"]
})
export class FavVideosComponent implements OnInit {
  favouriteMovies: MovieModel[] = []
  
  constructor(private favouriteVidsService: FavouriteVidsService) {
    this.favouriteVidsService.onMovieFavUpdated.subscribe((movies: MovieModel[]) => {
      this.favouriteMovies = movies
    })
  }

  ngOnInit() {
    this.favouriteMovies = this.favouriteVidsService.favouriteVids
  }
  removeVidFromFav(id: number){
    this.favouriteVidsService.removeFromFavourite(id)
  }
}
