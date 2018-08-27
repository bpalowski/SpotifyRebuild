import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResultService } from '../result/result.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ResultService]
})
export class ResultComponent implements OnInit {
photos:any[]=null;
  constructor(private resultAPI: ResultService) { }
  getInfo(query: string){
    this.resultAPI.getAPI(query).subscribe( response =>{
      this.photos = response.json();
    })
  }

  ngOnInit() {
  }

}
