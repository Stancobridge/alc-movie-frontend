import { MovieModel } from "./../models/movie.model";
import { Injectable } from "@angular/core";
import { movies, genres } from "../data/movies";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private allMovies: MovieModel[];

  constructor() {
    this.allMovies = movies;
  }

  get movies(): MovieModel[] {
    return this.allMovies.slice();
  }

  getGenres(ids: number[]) {
    // Get the movie
    let allGenres = ids.reduce((prev, curr) => {
      // let genre = genres.filter()
      let currentGen = genres.filter(genre => genre.id === Number(curr));
      prev += currentGen.length > 0 ? currentGen[0].name + ", " : "";
      return prev;
    }, "");

    return allGenres.replace(/(^[,\s]+)|([,\s]+$)/g, "");
    //
  }

  favourite(id: number): MovieModel | boolean {

    let newFav = this.movies.filter(m => m.id == id && !m.isFav)[0];
    
    // return if is already favourite
    if (!newFav) return false;
    
    // Else return the video
    let favouritedVid: MovieModel = newFav;
    favouritedVid.isFav = true;
    return favouritedVid;
  }


  unfavourite(id: number): MovieModel | boolean {

    let newFav = this.movies.filter(m => m.id == id && m.isFav)[0];
    
    // return if is already favourite
    if (!newFav) return false;
    
    // Else return the video
    let favouritedVid: MovieModel = newFav;
    favouritedVid.isFav = false;
    return favouritedVid;
  }

  updateFav(id: number, isFav: boolean) {
    let movies = this.allMovies.map(m => {
      if (m.id == id) {
        m.isFav = isFav;
      }

      return m;
    });

    this.allMovies = movies;
  }
}
