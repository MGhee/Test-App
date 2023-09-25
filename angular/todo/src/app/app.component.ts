import { Component, HostListener } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  items:string[];
  newItem:string;

  constructor(private dataservice: DataService) {
    this.items = this.dataservice.getData()
    this.newItem = ''
  }

  addIteem():void{
    if(this.newItem.trim() !== ''){
      this.dataservice.addData(this.newItem)
      this.items = this.dataservice.getData()
      this.newItem = ''
    }
  }

  removeItem(index:number):void{
    const item = this.items[index];
    this.dataservice.removeData(item);
    this.items = this.dataservice.getData()
  }

  @HostListener('document:keydown.enter')
  onEnterKey():void{
    this.addIteem();
  }


}
