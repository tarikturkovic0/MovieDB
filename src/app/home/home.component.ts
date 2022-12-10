import { Component } from '@angular/core';
import { MoviedbApiService } from '../services/moviedb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchValue : string = "";

  constructor(private apiService: MoviedbApiService){}
  ngOnInit(){
    this.apiService.getMovies().subscribe(data => {
      console.log(data);
    })
    this.apiService.getShows().subscribe(data => {
      console.log(data);
    })
  }
}
