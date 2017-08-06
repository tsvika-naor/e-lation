import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ifTrim'})
export class IfTrimPipe implements PipeTransform {
    transform(array: Array<any>, trim: boolean, startNum: number, endNum: number): Array<any> {
        if(!trim) {
            return array;
        }

        if(endNum === null || typeof endNum === 'undefined') {
            endNum = startNum;
            startNum = 0;
        }

        return array.slice(startNum, endNum);
    }
}
