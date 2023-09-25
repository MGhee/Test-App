import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  totalLength: number = 20

  transform(value: string, length: number = this.totalLength): string {
    if(value.length < length){
      return value
    }
    return value.substring(0,length) + "..."
  }

}
