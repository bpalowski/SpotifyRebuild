import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Router } from '@angular/router';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css'],
  providers: [ProfilService]
})
export class ListProfilesComponent implements OnInit {

profiles: Profile[];

constructor(private router: Router,private profilService: ProfilService) {}

ngOnInit(){
  this.profiles = this.profilService.getProfiles();
  }

     goToProfile(clickedProfile: Profile) {
       this.router.navigate(['profiles', clickedProfile.id]);
     };
    }



  // constructor() { }
  //
  // ngOnInit() {
  // }
