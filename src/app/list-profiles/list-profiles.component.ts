import { Component } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent  {
  profiles: Profile[]= [
    new Profile("Brian Profile","h","h",
    "A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom.", 1),

     ];
    }



  // constructor() { }
  //
  // ngOnInit() {
  // }
