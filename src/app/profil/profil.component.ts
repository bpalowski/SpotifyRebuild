import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProfilService } from '../profil.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  providers: [ProfilService]
})
export class ProfilComponent implements OnInit {
  profileId: string;
  profileToDisplay;
  // currentRoute: string = this.router.url;


  constructor(private route: ActivatedRoute, private location: Location, private profilService: ProfilService) { }

 // newThis = this;
  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.profileId = urlParametersArray['id'];
        });
        this.profilService.getProfileById(this.profileId).subscribe(dataLastEmittedFromObserver => {
        this.profileToDisplay = new Profile(dataLastEmittedFromObserver.name,
                                      dataLastEmittedFromObserver.email,
                                      dataLastEmittedFromObserver.favorites,
                                      dataLastEmittedFromObserver.password)


  })
}
}
