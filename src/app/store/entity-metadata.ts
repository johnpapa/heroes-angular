import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  Hero: {
    entityDispatcherOptions: {
      optimisticDelete: false,
      optimisticAdd: false,
      optimisticUpdate: false
    }
  },
  Villain: {}
};

const pluralNames = { Hero: 'Heroes' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};

//   /** All save operations are optimistic by default */
// const entityDispatcherDefaultOptions: EntityDispatcherDefaultOptions = {
//     optimisticAdd: true,
//     optimisticDelete: true,
//     optimisticUpdate: true,
//     optimisticUpsert: true,
//     optimisticSaveEntities: true
//   };
