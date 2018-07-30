import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme } from '../theme'

@Component({
  selector: 'app-theme3',
  templateUrl: './theme3.component.html',
  styleUrls: ['./theme3.component.css',
    './Assets/bootstrap.css',
    './Assets/fancybox.css',
    './Assets/font-awesome.css',
    './Assets/font-awesome-all.css',
    './Assets/font-awesome-corp.css',
    './Assets/font-awesome-ext.css',
    './Assets/font-awesome-social.css',
    './Assets/fonts.css',
    './Assets/responsive.css',
    './Assets/theme.css',],
  encapsulation: ViewEncapsulation.None
})
export class Theme3Component implements OnInit {

  theme: Theme = {
    id: 3,
    name: 'theme'
  };

  constructor() { }

  ngOnInit() {
  }

}
