import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  title = 'data';
  diceImage:string | null = null;

  rollDice(){
    const randonnr: number = Math.floor(Math.random() * 6) + 1;
    this.diceImage = `assets/dice-${randonnr}.png`
    return randonnr
  }

}
