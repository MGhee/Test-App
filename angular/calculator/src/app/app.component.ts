import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  currentNumber= '0'
  firstnr: number | null=null
  secondnr: number | null=null
  operator:string | null =null
  arr:string[] = []
  result :number | null=null

  public getNr(nr:string){
    this.currentNumber === '0'? this.currentNumber = nr: this.currentNumber += nr;
  }

  public clear(){
    this.currentNumber = '0';
    this.firstnr = null;
    this.operator = null;
  }

  public calculate(ope:string){
    if(ope == '+'){
      return this.result = this.firstnr! + this.secondnr!
    }
    else if(ope == '-'){
      return this.result = this.firstnr! - this.secondnr!
    }
    else if(ope == '/'){
      return this.result = this.firstnr! / this.secondnr!
    }
    else if(ope == '*'){
      return this.result = this.firstnr! * this.secondnr!
    }
    else if(ope == '='){
      return this.result
    }
    return 0

  }

  public doIt(){
    this.arr = this.currentNumber.split(" ")
    this.firstnr = parseInt(this.arr[0])
    this.operator = this.arr[1]
    this.secondnr = parseInt(this.arr[2])

    const result = this.calculate(this.operator)
    this.currentNumber = String(result)
   
  }

}
