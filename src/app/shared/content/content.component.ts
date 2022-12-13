import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Show } from 'src/app/models/show.model';
import { MoviedbApiService } from 'src/app/services/moviedb-api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() contentType: string = "";
  contentList : Movie[] | Show[] = [];
  searchValue : string = "";
  page : number = 1;
  totalPages : number = 1;
  shownContentId : number = -1;
  windowOnScreen : boolean = false;
  loading = true;

  constructor(private apiService : MoviedbApiService){}

  ngOnInit(){
    this.initializePage();
  }
  initializePage(){
    if(this.contentType == "movies"){
      this.contentList = [];
      this.apiService.getMovies().subscribe((data : any) =>{
        data.results.slice(0, 10).forEach((movie : any) =>{
          let newMovie = new Movie(movie.backdrop_path, movie.id, movie.release_date, movie.overview, movie.poster_path, movie.title, movie.vote_average, movie.imdb_id)
          this.contentList.push(newMovie);
        });
        this.loading = false;
      });
    }
    else{
      this.contentList = [];
      this.apiService.getShows().subscribe((data : any) =>{
        data.results.slice(0, 10).forEach((show : any) =>{
          let newShow = new Show(show.backdrop_path, show.id, show.release_date, show.overview, show.poster_path, show.name, show.vote_average, show.imdb_id)
          this.contentList.push(newShow);
        });
        this.loading = false;
      });
    }
  }

  searchMovies(){
    if(this.searchValue.length >= 3){
      this.loading = true;
      this.contentList = [];
      this.apiService.getSearchedMovies(this.searchValue, 1).subscribe((data : any) => {
        this.page = 1;
        this.totalPages = data.total_pages;
        data.results.forEach((movie : any) =>{
          let newMovie = new Movie(movie.backdrop_path, movie.id, movie.release_date, movie.overview, movie.poster_path, movie.title, movie.vote_average, movie.imdb_id)
          this.contentList.push(newMovie);
        });     
        this.loading = false;   
      });
    }
    else if(this.searchValue.length == 0) this.initializePage();
  }

  searchShows(){
    if(this.searchValue.length >= 3){
      this.loading = true;
      this.contentList = [];
      this.apiService.getSearchedShows(this.searchValue, 1).subscribe((data : any) => {
        this.page = 1;
        this.totalPages = data.total_pages;
        data.results.forEach((show : any) =>{
          let newShow = new Movie(show.backdrop_path, show.id, show.release_date, show.overview, show.poster_path, show.name, show.vote_average, show.imdb_id)
          this.contentList.push(newShow);
        });      
        this.loading = false;  
      });
    }
    else if(this.searchValue.length == 0) this.initializePage();
  }

  nextPage(){
    if(this.page < this.totalPages){
      this.page +=  1;
      this.contentList = [];
      if(this.contentType == "movies") this.searchMoviesByPage();
      else this.searchShowsByPage();
    }
  }

  previousPage(){
    if(this.page > 1){
      this.page -=  1;
      this.contentList = [];
      if(this.contentType == "movies") this.searchMoviesByPage();
      else this.searchShowsByPage();
    }
  }

  searchMoviesByPage(){
    this.apiService.getSearchedMovies(this.searchValue, this.page).subscribe((data : any) => {
      this.loading = true;
      this.totalPages = data.total_pages;
      data.results.forEach((movie : any) =>{
        let newMovie = new Movie(movie.backdrop_path, movie.id, movie.release_date, movie.overview, movie.poster_path, movie.title, movie.vote_average, movie.imdb_id)
        this.contentList.push(newMovie);
      });
      this.loading = false;
    });
  }

  searchShowsByPage(){
    this.apiService.getSearchedShows(this.searchValue, this.page).subscribe((data : any) => {
      this.loading = true;
      this.totalPages = data.total_pages;
      data.results.forEach((show : any) =>{
        let newShow = new Show(show.backdrop_path, show.id, show.release_date, show.overview, show.poster_path, show.name, show.vote_average, show.imdb_id)
        this.contentList.push(newShow);
      });
      this.loading = false;
    });
  }

  showWindow(id : number){
    if(this.shownContentId != -1) this.shownContentId = -1;
    else this.shownContentId = id;
    this.windowOnScreen = !this.windowOnScreen;
  }

}
