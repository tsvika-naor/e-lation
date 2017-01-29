import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'param'})
export class ParamPipe implements PipeTransform {
    transform(object: Object, param: string){
        var retVal = object;
        param.split('.').forEach(param => retVal = retVal[param]);
        return retVal;
    }
}