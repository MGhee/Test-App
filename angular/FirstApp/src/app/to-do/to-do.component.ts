import { Component, HostListener } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  title = 'todo';

  items:string[];
  newItem:string;
  editItems:string

  constructor(private dataservice: DataService) {
    this.items = this.dataservice.getData()
    this.newItem = ''
    this.editItems = ''
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

  editItem(index:number):void{
    const item = this.items[index]
    this.dataservice.editData(item,this.editItems)
    this.items = this.dataservice.getData()
    this.editItems = ''
 } 
  @HostListener('document:keydown.enter')
  onEnterKey():void{
    this.addIteem();
  }

}
