import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [
    MovieProvider
  ]
})
export class AboutPage {

  populares: object

  constructor(
    public navCtrl: NavController,
    private movieProvider: MovieProvider) {
  }

  ionViewDidLoad () {
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        this.populares = data
        console.log(data)
      }, error => {
        console.log(error)
      }
    )
  }
}
