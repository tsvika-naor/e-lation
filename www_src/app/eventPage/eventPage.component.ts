import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '../shared/redux';
import { ActionTypes as Actions } from '../shared/redux/event';

@Component({
    templateUrl: './eventPage.component.html'
})
export class EventPageComponent {
    _id: Observable<ObjectId>;
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
    posts: Observable<Array<Post>>;
    rSub: Subscription;


    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this._id = store$.select(state => state.event._id);
        this.owner = store$.select(state => state.event.owner);
        this.provider = store$.select(state => state.event.provider);
        this.admins = store$.select(state => state.event.admins);
        this.members = store$.select(state => state.event.members);
        this.name = store$.select(state => state.event.name);
        this.description = store$.select(state => state.event.description);
        this.startDate = store$.select(state => state.event.startDate);
        this.endDate = store$.select(state => state.event.endDate);
        this.address = store$.select(state => state.event.address);
        this.media = store$.select(state => state.event.media);
        this.posts = store$.select(state => state.event.posts);
        this.private = store$.select(state => state.event.private);
    }

    addMember(user: User) {
        this.store$.dispatch({ type: Actions.S_ADD_MEMBER, payload: user });
    }

    addAdmin(user: User) {
        this.store$.dispatch({ type: Actions.S_ADD_ADMIN, payload: user })
    }

    ngOnInit() {
        this.rSub = this.route.params.subscribe(params => {
            this.store$.dispatch({type: Actions.S_GET_EVENT, payload: params['id']});
        });
    }

    ngOnDestroy() {
        this.rSub.unsubscribe();
    }
}

/*
 {
 type: 'Add Member', payload:{_id: 111,firstName: "Coco", lastName:"Obb", email:"Bobobb@gmail.com",phone: "0501231234", gender:0, birthday: new Date("12-1-2010 13:00:00"), address:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"}, isProvider: true, provider:{_id: 101, bio: "Bio", rank: 5, reviews: null, businessAddress:{street: "st st", buildingNum:"1", city: "TLV", country: "Israel"},userId: 111}}
 } */