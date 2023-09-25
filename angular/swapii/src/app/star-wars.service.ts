import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private apiURL:string = 'https://swapi.dev/api';
  
  constructor(private http: HttpClient) {}

 

  getPeople() {

    return this.http.get(`${this.apiURL}/people`);

  }

  getFilm(filmUrl:string){
    return this.http.get(filmUrl);
  }
}
