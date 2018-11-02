import { DefaultDataServiceConfig } from 'ngrx-data';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'api', // default root path to the server's web api

  // Optionally specify resource URLS for HTTP calls
  entityHttpResourceUrls: {
    // Case matters. Match the case of the entity name.
    Hero: {
      // You must specify the root as part of the resource URL.
      entityResourceUrl: 'api/heroes/',
      collectionResourceUrl: 'api/heroes/'
    }
  }
};
