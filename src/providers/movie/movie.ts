import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  url: string = "https://api.themoviedb.org/3/"
  key: string = "?api_key=2e3d3353ce3368ac01d198cfb576e791"
  language: string = "&language=pt-BR"
  page: string = "&page=1"

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovie () {
    return this.http.get(`${this.url}movie/latest${this.key}`)
  }

  getPopularMovies () {
    return this.http.get(`${this.url}movie/popular${this.key + this.language + this.page }`)
  }

  getImage (img: string) {
    return `https://image.tmdb.org/t/p/original${img}`
  }
}
