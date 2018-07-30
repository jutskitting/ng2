import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Theme } from '../Themes/theme';
import { THEMES } from './themeslist';

@Injectable({
  providedIn: 'root',
})
export class ThemesListService {

  constructor() { }

  getThemes(): Observable<Theme[]> {
    return of(THEMES);
  }
}
