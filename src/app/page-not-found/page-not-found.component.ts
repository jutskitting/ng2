import { Component, OnInit } from '@angular/core';
import { Theme } from '../Themes/theme'
import { THEMES } from '../ThemesList/themeslist'
import { ThemesListService } from '../ThemesList/themeslistservice'
import { BodiesListService } from '../Components/BodiesList/bodieslistservice'
import { BODIES } from 'src/app/Components/bodieslist/bodieslist';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],

})

export class PageNotFoundComponent implements OnInit {

  themes = THEMES;
  bodies = BODIES;

  constructor(private themeslistService: ThemesListService, private bodieslistService: BodiesListService) { }

  ngOnInit() {
    this.getThemes();
  }
    getThemes(): void {
      this.themeslistService.getThemes()
        .subscribe(themes => this.themes = themes);
  }
  getBodies(): void {
    this.bodieslistService.getBodies()
      .subscribe(bodies => this.bodies = bodies);
  }
  }


