import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'param'})
export class ParamPipe implements PipeTransform {
    transform(object: Object, param: string){
        return object[param];
    }
}