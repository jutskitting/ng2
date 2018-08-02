import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme } from '../theme'
@Component({
  selector: 'app-theme5',
  templateUrl: './theme5.component.html',
  styleUrls: ['./theme5.component.css',
    './Assets/css/animate.css',
    './Assets/css/fonts.css',
    './Assets/css/style.css'],
  encapsulation: ViewEncapsulation.None
})
export class Theme5Component implements OnInit {

  theme: Theme = {
    id: 5,
    name: 'theme'
  };

  constructor() { }

  ngOnInit() {
  }

}
