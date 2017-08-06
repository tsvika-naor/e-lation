import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spread'
})
export class SpreadPipe implements PipeTransform {

  transform(value: Array<any>): String {
    return (value || []).join(', ');
  }

}
