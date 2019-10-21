import { ApiService } from './../../services/api.service';
import { LoginService } from './../../services/login.service';
import { FavouriteVidsService } from './../../services/favourite.service';
import { MovieModel } from './../../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainfavids',
  templateUrl: './mainfavids.component.html',
  styleUrls: ['./mainfavids.component.css']
})
export class MainfavidsComponent implements OnInit {

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

  removeVidFromFav(id: number) {
    console.log(id)
    this.favouriteVidsService.removeFromFavourite(id)
  }
}
