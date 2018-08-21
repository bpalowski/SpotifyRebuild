import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SecondNavBarComponent } from './second-nav-bar/second-nav-bar.component';

import { MainPageComponent } from './main-page/main-page.component';
import { ProfilComponent } from './profil/profil.component';
import { SearchMusicComponent } from './search-music/search-music.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { MusicVideoComponent } from './music-video/music-video.component';
import { FillerComponent } from './filler/filler.component';
import { FillerTwoComponent } from './filler-two/filler-two.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecondNavBarComponent,

    MainPageComponent,
    ProfilComponent,
    SearchMusicComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    MusicVideoComponent,
    FillerComponent,
    FillerTwoComponent,

  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
