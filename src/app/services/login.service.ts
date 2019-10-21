import { ApiService } from "./api.service";
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { MovieModel } from "../models/movie.model";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  onLoginDetect = new EventEmitter<string>();
  

  allFavs: MovieModel[] = [];

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) {


    this.onLoginDetect.subscribe((userId: string) => {
      this.userId = userId;

      this.http
        .post(this.apiService.apiBase + "movie/getFav", {
          userId: this.userId
        })
        .subscribe((res: { favouriteVids }) => {
          localStorage.setItem("userAllFavs", res.favouriteVids);

          router.navigate(["/favourite-vids"]);
        });
    });
  }

  set userId(value: any) {
    if(!value){
      sessionStorage.removeItem('useId');
      window.location.reload(false);
    } else{
      sessionStorage.setItem("useId", value);

    }
  }

  get userId(): any {
    return sessionStorage.getItem("useId") ;
  }

  onLogin(data: { email: string; password: string }) {
    return this.http.post(this.apiService.apiBase + "user/login", data);
  }

  set favouriteVideos(value: MovieModel[]) {
    console.log(value);
    let payload = {
      userId: this.userId,
      favouriteVids: JSON.stringify(value)
    };
    this.http
      .post(this.apiService.apiBase + "movie/addFav", payload)
      .subscribe(res => {
      
        console.log(res);
      });
  }
}
