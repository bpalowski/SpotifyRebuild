import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SecondNavBarComponent } from './second-nav-bar/second-nav-bar.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilComponent } from './profil/profil.component';
import { SearchMusicComponent } from './search-music/search-music.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecondNavBarComponent,
    MainLoginComponent,
    NewUserComponent,
    MainPageComponent,
    ProfilComponent,
    SearchMusicComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
