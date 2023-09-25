import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data';
  diceImage:string | null = null;

  rollDice(){
    const randonnr: number = Math.floor(Math.random() * 6) + 1;
    this.diceImage = `assets/dice-${randonnr}.png`
    return randonnr
  }
}
