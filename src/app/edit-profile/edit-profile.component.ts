import { Component,Input, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { ProfilService } from '../profil.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [ProfilService]
})
export class EditProfileComponent implements OnInit {
  @Input() selectedProfile;

  constructor(private profilService: ProfilService) { }

  ngOnInit() {
  }

  beginUpdatingProfile(profileToUpdate){
    this.profilService.updateProfile(profileToUpdate);
  }
  beginDeletingProfile(profileToDelete){
  if(confirm("Are you sure you want to delete this item from the inventory?")){
    this.profilService.deleteProfile(profileToDelete);
  }
}

}
