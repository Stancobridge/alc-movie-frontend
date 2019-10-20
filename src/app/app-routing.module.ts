import { SearchComponent } from './pages/search/search.component';
import { MainfavidsComponent } from './pages/mainfavids/mainfavids.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { PagesComponent } from "./pages/pages.component";
import { VideoDetailsComponent } from "./pages/video-details/video-details.component";
import { LoginPageComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "video-details/:id",
    component: VideoDetailsComponent
  },
  {
    path: "favourite-vids",
    component: MainfavidsComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "**",
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
