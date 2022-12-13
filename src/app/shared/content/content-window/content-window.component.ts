import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Show } from 'src/app/models/show.model';
import { MoviedbApiService } from 'src/app/services/moviedb-api.service';

@Component({
  selector: 'app-content-window',
  templateUrl: './content-window.component.html',
  styleUrls: ['./content-window.component.css']
})
export class ContentWindowComponent {
  @Output() close : EventEmitter<boolean> = new EventEmitter();
  @Input() id : number = -1;
  @Input() contentType : string = '';
  shownContent? : Movie | Show | any;
  trailerLink : string = "";
  genres : string[] = []
  loading : boolean = true;

  constructor(private apiService : MoviedbApiService){}

  //in the ngOnInit function I get the data of the movie or show and put that data inside a Movie/Show object
  ngOnInit(){
    if(this.contentType == "movies"){
      this.apiService.getMovieDetails(this.id).subscribe((movie : any) => {
        this.shownContent = new Movie(movie.backdrop_path, movie.id, movie.release_date, movie.overview, movie.poster_path, movie.title, movie.vote_average, movie.imdb_id);        
        movie.genres.forEach((genre : any)=>{
          this.genres.push(genre.name)
        })        
        this.apiService.getMovieTrailer(this.id).subscribe((data:any)=>{
          if(data.results.length != 0) this.trailerLink = "https://www.youtube.com/embed/" + data.results[0].key;          
          this.loading = false;
        });
      });
    }
    else{
      this.apiService.getShowDetails(this.id).subscribe((show : any) => {
        console.log(show);
        
        this.shownContent = new Show(show.backdrop_path, show.id, show.first_air_date, show.overview, show.poster_path, show.name, show.vote_average, show.imdb_id)
        show.genres.forEach((genre : any)=>{
          this.genres.push(genre.name)
        })    
        console.log(this.shownContent);
            
        this.apiService.getShowTrailer(this.id).subscribe((data:any)=>{
          if(data.results.length != 0) this.trailerLink = "https://www.youtube.com/embed/" + data.results[0].key;          
          this.loading = false;
        });
      });
    }
  }

  onClose(){
    this.close.emit();
  }
}
