import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Router } from '@angular/router';
import { ProfilService } from '../profil.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

// import { firebaseConfig } from '/app/app.moduel';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css'],
  providers: [ProfilService]
})
export class ListProfilesComponent implements OnInit {
  profiles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  // profiles: Profile[];

  constructor(private router: Router, private profilService: ProfilService) {}

  ngOnInit(){
    this.profiles = this.profilService.getProfiles();
  }

  goToProfile(clickedProfile: Profile ) {
    this.router.navigate(['profiles', clickedProfile.$key]);
  };
}



  // constructor() { }
  //
  // ngOnInit() {
  // }
