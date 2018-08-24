// import { Injectable } from '@angular/core';
// import {Http,Response} from "@angular/http";
// import { Observable } from "rxjs/Observable";
// import "rxjs/Rx";
// import {MyInterface} from "./search-interface";
//
// @Injectable()
// export class SearchMusicService {
//   private getURL ="https://api.thecatapi.com/v1/images/search?format=src&mime_types=image/gif";
//
//   // private artistsUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id='+this.clientId+'&q=';
//
//   constructor(private http: Http ) {}
//   getPosts(): Observable<MyInterface[]>{
//       return this.http
//        .get(this.getURL)
//        .map((response: Response)=> {
//          return <MyInterface[]>response.json();
//        })
//        .catch(this.handleError);
//    }
//
//    private handleError(error: Response) {
//     return Observable.throw(error.statusText);
//   }
//
// }
