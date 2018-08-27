import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class MainPageService {
  constructor(private http: Http ) {}

  getInfo(query: string) {
  return this.http.get(`https://api.napster.com/v2.2/search?query=${query}&per_type_limit=5&offset=5&client_id=YmU2ZmZkNTctNTI3Ni00YjQwLWIwN2MtMmJmNzg2ZmQzZWNj`)

  }
}
