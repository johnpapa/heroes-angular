import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Citizen } from '../core';

@Injectable({ providedIn: 'root' })
export class CitizenService extends EntityCollectionServiceBase<Citizen> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Citizen', serviceElementsFactory);
  }
}
