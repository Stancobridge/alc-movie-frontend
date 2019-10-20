import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { FavouriteVidsService } from './../../services/favourite.service';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  movie: MovieModel;
  constructor(private route: ActivatedRoute,private moviesService: MoviesService, private favouriteVidsService: FavouriteVidsService) {
    
   }

  ngOnInit() {
    // get the current movie By Id
    let movieById = this.route.snapshot.params['id']
    this.movie = this.moviesService.movies.filter(m => m.id ===  Number(movieById))[0];
    this.movie.genres = this.getGenres(this.movie.genre_ids).replace(/(^[,\s]+)|([,\s]+$)/g, '');

    // Check if video is in Favourite
    let isVidInFav = this.favouriteVidsService.favouriteVids.filter(v => v.id === this.movie.id);

    if(isVidInFav.length > 0){
      this.movie.isFav = true
    }

  }


  getGenres(ids: number[]) {
    return this.moviesService.getGenres(ids)
    
  }

  addMovieToFavourite(){
    this.favouriteVidsService.addToFavourite(this.movie.id)

  }

  removeMovieFromFavourite(){
    this.favouriteVidsService.removeFromFavourite(this.movie.id)

  }
}
