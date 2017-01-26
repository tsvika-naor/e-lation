import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';

import { routes, reducer, AddressPipe, IfTrimPipe, GenderPipe, ParamPipe, AuthEffects, EventEffects } from './shared';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PeopleListComponent } from './peopleList/peopleList.component';
import { UserPageComponent } from './userPage/userPage.component';
import { GroupPageComponent } from './groupPage/groupPage.component';
import { EventPageComponent } from './eventPage/eventPage.component';

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
      StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    UserPageComponent,
    GroupPageComponent,
    EventPageComponent,
    PeopleListComponent,
    AddressPipe,
    IfTrimPipe,
    GenderPipe,
    ParamPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }