import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { ProfilService} from '../profil.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [ProfilService]
})
export class SignUpComponent implements OnInit {

  constructor(private profilService: ProfilService) { }

  ngOnInit() {
  }
  submitForm(name: string, email: string, favorites: string, password:string ) {
    var newProfile: Profile = new Profile(name,email,favorites,password );
    this.profilService.addProfile(newProfile);
  }

}
