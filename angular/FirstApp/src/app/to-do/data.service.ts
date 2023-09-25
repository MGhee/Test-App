import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private list:string[] = ["Milk","Bread","Jam","Vanilla"]

  getData():string[]{
    return this.list
  }

  addData(item:string) : void{
    this.list.push(item);
  }

  removeData(item:string):void{
    const index = this.list.indexOf(item)
    if(index !== -1){
      this.list.splice(index,1);
    }
  }

  editData(item:string,newItem:string):void{
    const index =  this.list.indexOf(item)
    this.list[index] = newItem
  }

  
  
}
