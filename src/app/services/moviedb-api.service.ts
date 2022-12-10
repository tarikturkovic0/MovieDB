import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviedbApiService {
  
  private apiKey : string = "3d07769ed638fa382f1aa2a7dc215700";
  private url : string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=3d07769ed638fa382f1aa2a7dc215700&language=en-US&page=1");
  }
  getShows(){
    return this.http.get("https://api.themoviedb.org/3/tv/top_rated?api_key=3d07769ed638fa382f1aa2a7dc215700&language=en-US&page=1");
  }
  
}
