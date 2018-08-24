import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  providers: [ProfilService]
})
export class ProfilComponent implements OnInit {
  profileId: number;
  profileToDisplay: Profile;

  constructor(private route: ActivatedRoute, private location: Location, private profilService: ProfilService) { }

 newThis = this;
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.profileId = parseInt(urlParameters['id']);
        });
        this.profileToDisplay = this.profilService.getProfileById(this.profileId);
  }
}
