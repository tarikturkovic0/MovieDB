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
    return this.http.get(this.url + "/movie/top_rated?api_key=" + this.apiKey + "&language=en-US&page=1");
  }
  getShows(){
    return this.http.get(this.url + "/tv/top_rated?api_key=" + this.apiKey + "&language=en-US&page=1");
  }
  getSearchedMovies(query : string, page : Number){
    return this.http.get(this.url + "/search/movie?api_key=" + this.apiKey + "&language=en-US&query=" + query + "&page=" + page);
  }
  getSearchedShows(query : string, page : Number){
    return this.http.get(this.url + "/search/tv?api_key=" + this.apiKey + "&page=" + page + "&query=" + query);
  }
  getMovieDetails(id : number){
    return this.http.get(this.url + "/movie/" + id + "?api_key=" + this.apiKey);
  }
  getShowDetails(id : number){
    return this.http.get(this.url + "/tv/" + id + "?api_key=" + this.apiKey);
  }
  getMovieTrailer(id : number){
    return this.http.get(this.url + "/movie/" +  id + "/videos?api_key=" + this.apiKey);
  }
  getShowTrailer(id : number){
    return this.http.get(this.url + "/tv/" +  id + "/videos?api_key=" + this.apiKey);
  }
}
