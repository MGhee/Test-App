import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiURL:string = 'https://pokeapi.co/api/v2';
  
  constructor(private http: HttpClient) {}

 
  getPokemon() {

    return this.http.get(`${this.apiURL}/pokemon`);

  }

  getSpecPokemon(pokeURL:string){
    return this.http.get(pokeURL);
  }

  getItems(itemURL:string){
    return this.http.get(itemURL);
  }
  
}
