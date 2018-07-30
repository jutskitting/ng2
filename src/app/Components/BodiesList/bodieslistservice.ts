import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Body } from '../Bodies/body';
import { BodiesListModule } from '../../bodieslist.module';

@Injectable({
  providedIn: 'root',
})
export class BodiesListService {

  constructor() { }

  getBodies(): Observable<Body[]> {
    return of();
  }
  getBodyById(id: number | string) {
    return this.getBodies().pipe(
      // (+) before `id` turns the string into a number
      map(bodies => bodies.find(body => body.BodyId === +id))
  )
  }

}
