import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  NgrxDataModule,
  DefaultDataServiceConfig,
  EntityDispatcherDefaultOptions
} from 'ngrx-data';
import { environment } from '../../environments/environment';
import { entityConfig } from './entity-metadata';
import {
  defaultDataServiceConfig,
  entityDispatcherDefaultOptions
} from './config';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    NgrxDataModule.forRoot(entityConfig)
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    {
      provide: EntityDispatcherDefaultOptions,
      useValue: entityDispatcherDefaultOptions
    }
  ]
})
export class AppStoreModule {}
