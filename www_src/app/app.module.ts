import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';

import { AuthEffects, EventEffects, FeedEffects, GroupEffects, ProviderEffects, UserEffects,
         routes, reducer, AddressPipe, IfTrimPipe, GenderPipe, ParamPipe} from './shared';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(EventEffects),
    EffectsModule.run(FeedEffects),
    EffectsModule.run(GroupEffects),
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
    IfTrimPipe,
    ParamPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }