import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviedbApiService } from 'src/app/services/moviedb-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  contentType : string = "movies";
  topTenMovies : [] = []
  constructor(){  }

  ngOnInit(){
    
  }

}
