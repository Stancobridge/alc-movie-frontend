import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { VideoListComponent } from "./video-list/video-list.component";
import { FavVideosComponent } from "./video-list/fav-videos/fav-videos.component";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { LoginComponent } from "./login/login.component";
import { PagesComponent } from "./pages/pages.component";
import { VideoDetailsComponent } from "./pages/video-details/video-details.component";
import { LoginPageComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AboutComponent } from "./pages/about/about.component";
import { MoviesService } from "./services/movies.service";
import { MainfavidsComponent } from './pages/mainfavids/mainfavids.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    VideoListComponent,
    FavVideosComponent,
    SearchBoxComponent,
    LoginComponent,
    PagesComponent,
    VideoDetailsComponent,
    LoginPageComponent,
    RegisterComponent,
    AboutComponent,
    MainfavidsComponent,
    SearchComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
