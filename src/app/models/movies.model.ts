export class Movies {
    
  private movies: {}[] 
  getMovies (): {}[] {
    return this.movies.slice()
  }
}