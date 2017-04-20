import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';

import {
  AuthEffects, EventEffects, FeedEffects, GroupEffects, InfoEffects, ProviderEffects, UserEffects,
  routes, reducer, AddressPipe, IfTrimPipe, GenderPipe,
  FacebookService, INIT_PARAMS, GoogleService, GOOG_ID
} from './shared';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { EventPageComponent } from './eventPage/eventPage.component';
import { FeedComponent } from './feed/feed.component';
import { GroupPageComponent } from './groupPage/groupPage.component';
import { ProviderComponent } from './provider/provider.component';
import { UserPageComponent } from './userPage/userPage.component';
import { PeopleListComponent } from './peopleList/peopleList.component';
import { PostComponent } from './post/post.component';

var fbParams = {
  appId: '1246381665456070',
  cookie: true,
  xfbml: false,
  version: 'v2.8'
};

var googId = '142084885382-lr0fajuthv25m2oc98107ete22lqe5h2';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(EventEffects),
    EffectsModule.run(FeedEffects),
    EffectsModule.run(GroupEffects),
    EffectsModule.run(InfoEffects),
    EffectsModule.run(ProviderEffects),
    EffectsModule.run(UserEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    EventPageComponent,
    FeedComponent,
    GroupPageComponent,
    ProviderComponent,
    UserPageComponent,
    PeopleListComponent,
    PostComponent,
    AddressPipe,
    GenderPipe,
    IfTrimPipe
  ],
  providers: [
    FacebookService,
    { provide: INIT_PARAMS, useValue: fbParams },
    GoogleService,
    { provide: GOOG_ID, useValue: googId}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }