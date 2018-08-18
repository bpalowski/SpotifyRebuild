import { Component } from '@angular/core';
import { CreateNew } from './models/createnew.model';
import { Login } from './models/login.model';
import { Show } from './models/search.model';


@Component({
  selector: 'Body-Spotify',
  //selector HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotify';


}
