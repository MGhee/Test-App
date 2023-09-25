import { Component } from '@angular/core';

@Component({
  selector: 'app-new-image',
  templateUrl: './newimage.component.html',
  styleUrls: ['./newimage.component.css']
})
export class NewImageComponent {
  imageUrl: string;
  imageSource: string;

  constructor(){
    this.imageSource = '';
    this.imageUrl = '';
  }

  onSubmit(){
    this.imageSource = this.imageUrl;
    this.imageUrl = '';
  }



}
