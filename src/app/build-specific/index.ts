import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 * Put dev specific code here, and prod specific code in index.prod.ts
 * https://ngrx.io/guide/store-devtools/recipes/exclude
 */
export const externalModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25
  })
];
