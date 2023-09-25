import { Component, OnInit, OnDestroy } from '@angular/core';

import { StarWarsService } from './star-wars.service';

import { Subscription } from 'rxjs';
import { PokemonService } from './pokemon.service';

 

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit,OnDestroy {

  people: any[] = []; // we don't know what data we are going to get back
  public subscription!: Subscription;
  selectedFilm :any

  selectedPokemon: any[] = []
  selectedItem: any[] = []
  pokemon: any[] = []

  constructor(private pokemonService : PokemonService) {}

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  ngOnInit():void{
    this.subscription = this.pokemonService.getPokemon().subscribe((data:any) => {this.pokemon = data.results;});
  }

  loadPokemon(pokeURL:string){
    this.subscription = this.pokemonService.getSpecPokemon(pokeURL).subscribe((poke:any) => {this.selectedPokemon = poke.abilities; this.selectedFilm = poke.moves});
  }

  loadItems(itemURL:string){
    this.subscription = this.pokemonService.getItems(itemURL).subscribe((item:any) => {this.selectedItem = item.effect_entries;});
  }
 

 

 

}