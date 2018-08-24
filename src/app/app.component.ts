import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'Body-Spotify',
  //selector HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotify';

constructor(private httpClient:HttpClient) { }
  // SignUp: string;
  // Login: string;

}
