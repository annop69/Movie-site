import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://moviesdatabase.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getUpcomingMovies(): Observable<any[]>{
    const url = `${this.apiUrl}/titles/x/upcoming`
    return this.http.get<any[]>(url,
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key': '0b8f89c5a4mshcc009e25f7f49a1p165381jsnc4e731d3cf3e'
        }),
        params:{
          limit: 12,
          info: 'custom_info'
        }
      });
  }

  getTopRatedMovies(): Observable<any[]>{
    const url = `${this.apiUrl}/titles`
    return this.http.get<any[]>(url,
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key': '0b8f89c5a4mshcc009e25f7f49a1p165381jsnc4e731d3cf3e'
        }),
        params:{
          list: 'top_rated_250',
          limit: 12
        }
      });
  }

  searchMovie(data: string): Observable<any[]>{
    let inputData = data.replace(" ", "%20")
    
    const url = `${this.apiUrl}/titles/search/title/${inputData}`
    return this.http.get<any[]>(url,
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key': '0b8f89c5a4mshcc009e25f7f49a1p165381jsnc4e731d3cf3e'
        }),
        params:{
          exact: false,
          info: 'custom_info'
        }
      });
  }
}
