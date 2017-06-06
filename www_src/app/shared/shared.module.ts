import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdListModule, MdChipsModule, MdIconModule, MdButtonModule } from '@angular/material';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

import { ValueDirective } from './directives/value.directive';
import { PostComponent } from './post/post.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { IfTrimPipe } from './pipes/if-trim.pipe';
import { AddressPipe } from './pipes/address.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { HttpService } from './providers/http.service';
import { DateOnlyPipe } from './pipes/date-only.pipe';
import { SpreadPipe } from './pipes/spread.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdChipsModule,
    MdIconModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    HttpService
  ],
  exports: [ValueDirective, PostComponent, PeopleListComponent, IfTrimPipe, AddressPipe, GenderPipe, DateOnlyPipe, SpreadPipe],
  declarations: [ValueDirective, PostComponent, PeopleListComponent, IfTrimPipe, AddressPipe, GenderPipe, DateOnlyPipe, SpreadPipe]
})
export class SharedModule { }
