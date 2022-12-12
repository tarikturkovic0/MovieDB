export class Movie{
    public backdropPath : string;
    public genreIds : Number[];
    public id : Number;
    public overview : string;
    public poster : string;
    public title : string;
    public voteAverage : Number;
    public rating : string;
    constructor(backdropPath : string, genreIds : Number[], id : Number, overview : string, 
        posterPath : string, title : string, voteAverage : Number){
            this.backdropPath = backdropPath;
            this.genreIds = genreIds;
            this.id = id;
            this.overview = overview;
            this.poster = "https://image.tmdb.org/t/p/w185" + posterPath;
            this.title = title;
            this.voteAverage = voteAverage;
            if(this.voteAverage <= 10 && this.voteAverage >= 8.1) this.rating = "perfect";
            else if(this.voteAverage <= 8 && this.voteAverage >= 6.1) this.rating = "good";
            else if(this.voteAverage <= 6 && this.voteAverage >= 4.1) this.rating = "okay";
            else if(this.voteAverage <= 4 && this.voteAverage >= 2.1) this.rating = "bad";
            else this.rating = "awful";
        }
}