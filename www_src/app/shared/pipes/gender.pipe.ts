import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'gender'})
export class GenderPipe implements PipeTransform {
    transform(gender: Number){
        switch(gender) {
            case 0: {
                return "Male";
            }
            case 1: {
                return "Female";
            }
            default: {
                return "";
            }
        }
    }
}