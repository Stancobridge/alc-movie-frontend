import { LoginService } from './login.service';
import { MoviesService } from "./movies.service";
import { Injectable, EventEmitter } from "@angular/core";
import { MovieModel } from "../models/movie.model";

@Injectable({
  providedIn: "root"
})
export class FavouriteVidsService {
  onMovieFavUpdated = new EventEmitter<MovieModel[]>();

  
  constructor(private moviesService: MoviesService, private loginService: LoginService) {
    // let apiFav: string = JSON.stringify(this.loginService.favouriteVideos)
    // let favList = this.loginService.userId ? apiFav :  localStorage.getItem("allFavVids") ;
    // if (!favList) {
    //   localStorage.setItem("allFavVids", JSON.stringify([]));
    // } else {
    //   Object.defineProperties(window, {
    //     locaclStorage: {
    //       writable: false
    //     }
    //   })
    //   this.favouriteVids = JSON.parse(favList)
    // }
  }


  get favouriteVids():  MovieModel[]  {
    if(this.loginService.userId) {
      return localStorage.getItem("userAllFavs") ? JSON.parse(localStorage.getItem("userAllFavs")) : []
    } 
      return localStorage.getItem("allFavVids") ? JSON.parse(localStorage.getItem("allFavVids")) : []

    
  }

  set favouriteVids(value: MovieModel[])  {
    if(this.loginService.userId) {
      localStorage.setItem('userAllFavs', JSON.stringify(value));

      // Update Server Database
      this.loginService.favouriteVideos = JSON.parse(localStorage.getItem('userAllFavs'))
    } else{
      
      localStorage.setItem('allFavVids',JSON.stringify(value))

    }
    
  }

  addToFavourite(id: number) {
    // get Favourite
    const favMovie = this.moviesService.favourite(id);

    // Check video in localStorage
    let vidInLocalStorage = this.favouriteVids.filter(vid => vid.id == id)
    
    // Check if video already in fav
    if (favMovie && vidInLocalStorage.length < 1) {
      this.favouriteVids = [...this.favouriteVids,<MovieModel>favMovie];
      this.moviesService.updateFav((<MovieModel>favMovie).id, true);
      this.onMovieFavUpdated.emit(this.favouriteVids);

    }
  }

  removeFromFavourite(id: number) {
    // get Favourite
    const favMovie = this.moviesService.unfavourite(id);

    // Check video in localStorage
    let vidInLocalStorage = this.favouriteVids.filter(vid => vid.id !== id)

      this.favouriteVids = [...vidInLocalStorage];
      this.moviesService.updateFav((<MovieModel>favMovie).id, false);
      this.onMovieFavUpdated.emit(this.favouriteVids);

  }
}
