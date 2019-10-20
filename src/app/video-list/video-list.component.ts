import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  movies: MovieModel[];

  constructor(private moviesService: MoviesService ) {
    
   }

  ngOnInit() {
    this.movies = this.moviesService.movies
  }

}
