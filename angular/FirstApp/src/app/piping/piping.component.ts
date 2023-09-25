import { Component } from '@angular/core';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.css']
})
export class PipingComponent {
  currentDate: Date =  new Date();
  username: string = "Milea Gheorghe"
}
