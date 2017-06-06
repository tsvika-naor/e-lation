import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOnly'
})
export class DateOnlyPipe implements PipeTransform {

  transform(date: string): any {
    if (date !== null && date.indexOf('T') > -1 ) {
      return date.split('T')[0];
    }

    return date;
  }

}
