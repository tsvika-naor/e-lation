import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'address' })
export class AddressPipe implements PipeTransform {
    transform(address: Address) {
        if (address === null || typeof address === "undefined")
            return "";

        return address.street + ' ' + address.buildingNum + ',' + address.city + '-' + address.country;
    }
}