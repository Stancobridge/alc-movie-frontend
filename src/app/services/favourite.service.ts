import { MoviesService } from "./movies.service";
import { Injectable, EventEmitter } from "@angular/core";
import { MovieModel } from "../models/movie.model";

@Injectable({
  providedIn: "root"
})
export class FavouriteVidsService {
  onMovieFavUpdated = new EventEmitter<MovieModel[]>();
  // favouriteVids: MovieModel[] = [];

  
  constructor(private moviesService: MoviesService) {
    let favList = localStorage.getItem("allFavVids");
    if (!favList) {
      localStorage.setItem("allFavVids", JSON.stringify([]));
    } else {
      Object.defineProperties(window, {
        locaclStorage: {
          writable: false
        }
      })
      this.favouriteVids = JSON.parse(favList)
    }
  }

  get favouriteVids():  MovieModel[]  {
    return JSON.parse(localStorage.getItem("allFavVids"))
  }

  set favouriteVids(value: MovieModel[])  {
    localStorage.setItem('allFavVids',JSON.stringify(value))
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
