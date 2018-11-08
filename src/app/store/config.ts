import { DefaultDataServiceConfig } from 'ngrx-data';

const root = 'https://papa-heroes-node-api.azurewebsites.net/api';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root, // default root path to the server's web api

  entityHttpResourceUrls: {
    Hero: {
      // You must specify the root as part of the resource URL.
      entityResourceUrl: `${root}/heroes/`,
      collectionResourceUrl: `${root}/heroes/`
    },
    Villain: {
      entityResourceUrl: `${root}/villains/`,
      collectionResourceUrl: `${root}/villains/`
    }
  }
};
