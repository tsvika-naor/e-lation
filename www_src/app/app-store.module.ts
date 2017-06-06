import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';

import { AuthEffects } from './auth';
import { EventEffects } from './event';
import { FeedEffects } from './feed';
import { GroupEffects } from './group';
import { NavEffects } from './nav';
import { ProviderEffects } from './provider';
import { UserEffects } from './user';
import { SharedEffects } from './shared';
import { reducer } from './app-store.reducers';

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(EventEffects),
    EffectsModule.run(FeedEffects),
    EffectsModule.run(GroupEffects),
    EffectsModule.run(NavEffects),
    EffectsModule.run(ProviderEffects),
    EffectsModule.run(UserEffects),
    EffectsModule.run(SharedEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  exports: [
    StoreModule,
    RouterStoreModule,
    EffectsModule,
    StoreDevtoolsModule
  ]
})
export class AppStoreModule { }
