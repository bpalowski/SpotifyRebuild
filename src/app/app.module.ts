import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/second-nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { NewUserComponent } from './new-user/new-user.component';
import { InsideComponent } from './inside/inside.component';
import { SearchMusicComponent } from './search-music/search-music.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SearchComponent,
    ProfileComponent,
    NavSearchComponent,
    NewUserComponent,
    InsideComponent,
    SearchMusicComponent
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
