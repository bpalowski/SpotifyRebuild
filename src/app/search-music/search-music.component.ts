// import { Component, OnInit } from '@angular/core';
// import { MyInterface } from "./search-interface";
// import { SearchMusicService } from '../search-music/search-music.service';
//
// @Component({
//   selector: 'app-search-music',
//   templateUrl: './search-music.component.html',
//   styleUrls: ['./search-music.component.css'],
//   providers:[SearchMusicService]
// })
// export class SearchMusicComponent implements OnInit {
// _postsArray: MyInterface[];
//
//   constructor(private searchMusicService: SearchMusicService ) { }
//
//   getPosts(): void {
//     this.searchMusicService.getPosts().
//     subscribe(
//        resultArray => this._postsArray =
//        resultArray,
//        error => console.log("Error :: " + error ))
//   }
//
//   ngOnInit() {
//     this.getPosts();
//   }
//
// }
