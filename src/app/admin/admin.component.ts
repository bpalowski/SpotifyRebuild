import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { ProfilService} from '../profil.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProfilService]
})
export class AdminComponent implements OnInit {

  constructor(private profilService: ProfilService) { }

  ngOnInit() {
  }

  submitForm(name: string, email: string, favorites: string, password:string ) {
    var newProfile: Profile = new Profile(name,email,favorites,password );
    this.profilService.addProfile(newProfile);
  }

}
