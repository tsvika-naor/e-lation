/// <reference path="../../../typings/index.d.ts" />
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../shared/redux'
import { ActionTypes as AuthActions } from '../shared/redux/auth'

enum Gender {
    Male,
    Female
}

@Component({
    templateUrl: './groupPage.component.html'
})
export class GroupPageComponent {
    _id: ObjectId;
    owner: User;
    provider: Provider;
    admins: Array<User>;
    members: Array<User>;
    name: String;
    description: String;
    groupType: Array<String>;
    address: Address;

    constructor(private store$: Store<State>) {
        this._id = 12;
        this.name = "soccer";
        this.admins = [{
            _id: 22, firstName: "dori", lastName: "bass", email: "dori@CssProps.com", phone: "05252323", gender: Gender.Male, birthday: new Date("3/3/1987"),
            address: { street: "veizman", buildingNum: "30", city: "yavne", country: "israel" }, avatar: { mimeType: "aaa", data: "sss" }
        }];
        this.members = [{
            _id: 22, firstName: "dori", lastName: "bass", email: "dori@CssProps.com", phone: "05252323", gender: Gender.Male, birthday: new Date("3/3/1987"),
            address: { street: "veizman", buildingNum: "30", city: "yavne", country: "israel" }, avatar: { mimeType: "aaa", data: "sss" }, {_id: 111, firstName: "Coco", lastName: "Obb", email: "Bobobb@gmail.com", phone: "0501231234", gender: 0, birthday: new Date("12-1-2010 13:00:00"), address: { street: "st st", buildingNum: "1", city: "TLV", country: "Israel" }, isProvider: true, provider: { _id: 101, bio: "Bio", rank: 5, reviews: null, businessAddress: { street: "st st", buildingNum: "1", city: "TLV", country: "Israel" }, userId: 111 } }];
        this.provider = { _id: 23, bio: "ssdsd", rank: 3232, reviews: null, businessAddress: null, user: { _id: 33, email: null, phone: null, gender: Gender.Male, firstName: "provideFnSoccer", lastName: "provideLnSoccer" } };
        this.address = { street: "ahroni", buildingNum: "20", city: "rehovot", country: "israel" };
        this.description = "if you like soccer this is for u";
        this.address = { street: "ahroni", buildingNum: "20", city: "rehovot", country: "israel" };
        this.owner = {
            _id: 22, firstName: "dori", lastName: "bass", email: "dori@CssProps.com", phone: "05252323", gender: Gender.Male, birthday: new Date("3/3/1987"),
            address: { street: "veizman", buildingNum: "30", city: "yavne", country: "israel" }, avatar: { mimeType: "aaa", data: "sss" },
            isProvider: false
        };
        this.groupType = ["running", "swimming", "yoga"];


        console.log(this.owner);
    }
}
