import { HttpClientJsonpModule, HttpClient } from "@angular/common/http";

export class PeliculasService {

  private APIKey:string = "c8f82d93111b1f7ec60156adc5fa87be";
  private URLMovieDB:string = "https://api.themoviedb.org/3";

  constructor(private jsonp:HttpClientJsonpModule, private http:HttpClient) { }

  getPopularsChildren() {
    let url = `${ this.URLMovieDB }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1&api_key=${ this.APIKey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getCartel() {

    let fromDate = new Date();
    let toDate = new Date();
    toDate.setDate( toDate.getDate() + 1);
    console.log(this.getDateSrt(fromDate))
    console.log(this.getDateSrt(toDate))
    
    let url = `${ this.URLMovieDB }/discover/movie?primary_release_date.gte=${this.getDateSrt(fromDate)}&primary_release_date.lte=${this.getDateSrt(toDate)}&api_key=${ this.APIKey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getPopulars() {
    let url = `${ this.URLMovieDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.APIKey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  searchMovie(movieName: string) {
    let url = `${ this.URLMovieDB }/search/movie?query=${ movieName }&sort_by=popularity.desc&api_key=${ this.APIKey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  private getDateSrt(date:Date){
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + (date.getDate() + 1)).slice(-2)}`;
  }

}
