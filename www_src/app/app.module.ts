import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdSidenavModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';

import { SharedModule, FeedService } from './shared';
import { AuthModule } from './auth';
import { EventModule } from './event';
import { FeedModule } from './feed';
import { GroupModule } from './group';
import { NavModule } from './nav';
import { ProviderModule } from './provider';
import { UserModule } from './user';
import { INIT_PARAMS, GOOG_ID } from './auth/providers';

const fbParams = {
    appId: '1246381665456070',
    cookie: true,
    xfbml: false,
    version: 'v2.8'
};

const googId = '142084885382-lr0fajuthv25m2oc98107ete22lqe5h2';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MdSidenavModule,
        AppRoutingModule,
        AppStoreModule,
        SharedModule,
        AuthModule,
        EventModule,
        FeedModule,
        GroupModule,
        NavModule,
        ProviderModule,
        UserModule
    ],
    providers: [
        { provide: GOOG_ID, useValue: googId },
        { provide: INIT_PARAMS, useValue: fbParams },
        FeedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
