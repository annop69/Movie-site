import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionLoggerService {

  constructor() { }

  isLoggedIn(): boolean{
    // let data = localStorage.getItem('token');
    // if(data == null) return false
    return !!localStorage.getItem('textInput');
  }

  movieDetails: any[] = []
}
