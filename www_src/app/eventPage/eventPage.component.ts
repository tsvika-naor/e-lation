/// <reference path="../../../typings/index.d.ts" />

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as EventState } from '../shared/redux/event';
import { Observable } from 'rxjs/Observable';

import { State } from '../shared/redux'

enum Gender {
    Male,
    Female
}

@Component({
    templateUrl: './eventPage.component.html'
})
export class EventPageComponent {

    owner: Observable<User>;
    provider: Observable<Provider>;
    admins: Observable<Array<User>>;
    members: Observable<Array<User>>;
    name: Observable<String>;
    description: Observable<String>;
    startDate: Observable<Date>;
    endDate: Observable<Date>;
    media: Observable<Array<MediaObject>>;
    private: Observable<Boolean>;
    address: Observable<Address>;
    comments: Observable<Array<UserComment>>;
    event: Observable<EventState>;


    constructor(private store$: Store<State>) {
        /*his._id = store$.select(state => state.event._id);
        this.owner = store$.select(state => state.event.owner);// {_id: 111,firstName: "Bob", lastName:"Obb", email:"Bobobb@gmail.com",phone: "0501231234", gender:Gender.Male, birthday: new Date("12-1-2010 13:00:00"), address:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"}, isProvider: true, provider:{_id: 101, bio: "Bio", rank: 5,  reviews: null, businessAddress:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"},userId: 111}};
        this.provider = store$.select(state => state.event.provider);//{_id: 101, bio: "Bio", rank: 5,  reviews: null, businessAddress:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"},user: 111};
        this.admins= [this.owner];
        this.members= [this.owner];
        this.name = "Kidush";//store$.let(EventStore.getName);
        this.description = "A spiritual welcoming of ths shabbat"; //store$.let(EventStore.getDescription);
        this.startDate = new Date("12-1-2010 13:00:00");//store$.let(EventStore.getStartDate);
        this.endDate = new Date("12-1-2010 13:00:00");// store$.let(EventStore.getEndDate);
        this.address = {street: "st st", buildingNum:"1", city: "TLV", country: "Israel"};//store$.let(EventStore.getAddress);
        this.media=null;
        this.private =false;// store$.let(EventStore.getIsPrivate);*/
        this.owner = store$.select(state => state.event.owner);
        this.provider = store$.select(state => state.event.provider);
        this.admins= store$.select(state => state.event.admins);
        this.members= store$.select(state => state.event.members);
        this.name = store$.select(state => state.event.name);
        this.description = store$.select(state => state.event.description);
        this.startDate = store$.select(state => state.event.startDate);
        this.endDate = store$.select(state => state.event.endDate);
        this.address= store$.select(state => state.event.address);
        this.media= store$.select(state => state.event.media);
        this.comments= store$.select(state => state.event.comments);
        this.private = store$.select(state => state.event.private);
    }

    addMember(User){
        this.store$.dispatch({type: "ADD_MEMBER", payload:{_id: 111,firstName: "Coco", lastName:"Obb", email:"Bobobb@gmail.com",phone: "0501231234", gender:0, birthday: new Date("12-1-2010 13:00:00"), address:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"}, isProvider: true, provider:{_id: 101, bio: "Bio", rank: 5,  reviews: null, businessAddress:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"},userId: 111}} })
    }
    addAdmin(User){
        this.store$.dispatch({type: "ADD_ADMIN", payload: {_id: 111,firstName: "Bob", lastName:"Obb", email:"Bobobb@gmail.com",phone: "0501231234", gender:Gender.Male, birthday: new Date("12-1-2010 13:00:00"), address:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"}, isProvider: true, provider:{_id: 101, bio: "Bio", rank: 5,  reviews: null, businessAddress:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"},userId: 111}}})
    }

    login() {
        console.log("TEST: login triggered");
    }
}{ }

/*
 _id: ObjectId,
 owner: User,
 provider: Provider,
 admins: Array<User>,
 members: Array<User>,
 name: String,
 description: String,
 startDate: Date,
 endDate: Date,
 media: Array<MediaObject>,
 private: Boolean,
 address: Address,
 comments: Array<UserComment>
 */
/*
 {
 type: 'Add Member', payload:{_id: 111,firstName: "Coco", lastName:"Obb", email:"Bobobb@gmail.com",phone: "0501231234", gender:0, birthday: new Date("12-1-2010 13:00:00"), address:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"}, isProvider: true, provider:{_id: 101, bio: "Bio", rank: 5, reviews: null, businessAddress:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"},userId: 111}}
 } */