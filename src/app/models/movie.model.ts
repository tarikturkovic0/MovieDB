export class Movie{
    public backdropPath : string;
    public id : number;
    public overview : string;
    public poster : string;
    public title : string;
    public voteAverage : number;
    public rating : string;
    public releaseDate : string;
    public imdbId : string;
    constructor(backdropPath : string, id : number, releaseDate : string, overview : string, 
        posterPath : string, title : string, voteAverage : number, imdbId : string){
            this.backdropPath = backdropPath;
            this.id = id;
            this.overview = overview;
            this.releaseDate = releaseDate;
            this.poster = "https://image.tmdb.org/t/p/w185" + posterPath;
            this.title = title;
            this.voteAverage = voteAverage;
            this.imdbId = imdbId;
            if(this.voteAverage <= 10 && this.voteAverage >= 8.1) this.rating = "perfect";
            else if(this.voteAverage <= 8 && this.voteAverage >= 6.1) this.rating = "good";
            else if(this.voteAverage <= 6 && this.voteAverage >= 4.1) this.rating = "okay";
            else if(this.voteAverage <= 4 && this.voteAverage >= 2.1) this.rating = "bad";
            else this.rating = "awful";
        }
}