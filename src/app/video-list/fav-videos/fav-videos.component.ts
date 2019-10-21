import { LoginService } from './../../services/login.service';
import { ApiService } from './../../services/api.service';
import { FavouriteVidsService } from "./../../services/favourite.service";
import { Component, OnInit } from "@angular/core";
import { MovieModel } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-fav-videos",
  templateUrl: "./fav-videos.component.html",
  styleUrls: ["./fav-videos.component.css"]
})
export class FavVideosComponent implements OnInit {
  favouriteMovies: MovieModel[] = []
  
  constructor(private favouriteVidsService: FavouriteVidsService, private http: HttpClient, private apiService: ApiService, private loginService :LoginService ) {
    
    this.http
    .post(this.apiService.apiBase + "movie/getFav", {
      userId: this.loginService.userId
    })
    .subscribe((res: { favouriteVids }) => {
      console.log(res.favouriteVids)
      localStorage.setItem("userAllFavs", res.favouriteVids);
      this.favouriteMovies = JSON.parse(res.favouriteVids)
    });

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
