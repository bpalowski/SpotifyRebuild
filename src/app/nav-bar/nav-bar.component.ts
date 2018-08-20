import { Component,Input,Output,EventEmitter } from '@angular/core';
// import { CreateNew } from '../models/createnew.model';
import { Login } from '../models/login.model';
// import { Show } from '../models/search.model';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{

  // SignUp : string;
   Login: string ="Login";
//  test = 'test';
constructor() { }
}
