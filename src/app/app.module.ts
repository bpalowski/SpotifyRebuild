import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SecondNavBarComponent } from './second-nav-bar/second-nav-bar.component';

import { MainPageComponent } from './main-page/main-page.component';
import { ProfilComponent } from './profil/profil.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { MusicVideoComponent } from './music-video/music-video.component';
import { FillerComponent } from './filler/filler.component';
import { FillerTwoComponent } from './filler-two/filler-two.component';
import { ResultComponent } from './result/result.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { AdminComponent } from './admin/admin.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId:  masterFirebaseConfig.projectId,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecondNavBarComponent,

    MainPageComponent,
    ProfilComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    MusicVideoComponent,
    FillerComponent,
    FillerTwoComponent,
    ResultComponent,
    ListProfilesComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      routing,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
