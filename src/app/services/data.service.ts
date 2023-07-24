import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from './movie.service';
import { SessionLoggerService } from '../providers/session-logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _canSearch = new BehaviorSubject<boolean>(false);
  canSearch = this._canSearch.asObservable();

  constructor(private movieService: MovieService,
              private sl: SessionLoggerService) { }

  initializeApp():Promise<any>{
    return new Promise((resolve, reject) => {
      let textInput = localStorage.getItem('textInput');
      console.log("text", textInput);
      if(textInput != null){
        this.movieService.searchMovie(textInput).subscribe((res:any) => {
          console.log("results", res)
          if(res.results){
            this.sl.movieDetails.push(res.results);
          }
          console.log("sl", this.sl.movieDetails);
        },
        (err) => {
            resolve(1);
        },
        () => {
            resolve(1);
        })
      }
      else resolve(1);
    })
  }

  searchToggle(data: boolean){
    this._canSearch.next(data);
  }

}
