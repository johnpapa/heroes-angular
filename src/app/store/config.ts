import { DefaultDataServiceConfig } from 'ngrx-data';

const root = 'http://localhost:7777/api';
export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root, // default root path to the server's web api

  // Optionally specify resource URLS for HTTP calls
  entityHttpResourceUrls: {
    // Case matters. Match the case of the entity name.
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

// export const entityDispatcherDefaultOptions: EntityDispatcherDefaultOptions = {
//   optimisticAdd: false,
//   optimisticDelete: false,
//   optimisticUpdate: false,
//   optimisticUpsert: false,
//   optimisticSaveEntities: false
// };
