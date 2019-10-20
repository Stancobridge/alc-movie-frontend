import { FavouriteVidsService } from './../../services/favourite.service';
import { MovieModel } from './../../models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainfavids',
  templateUrl: './mainfavids.component.html',
  styleUrls: ['./mainfavids.component.css']
})
export class MainfavidsComponent implements OnInit {

  favouriteMovies: MovieModel[] = []
  
  constructor(private favouriteVidsService: FavouriteVidsService) {
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
