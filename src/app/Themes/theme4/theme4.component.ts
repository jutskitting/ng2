import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme } from '../theme'
@Component({
  selector: 'app-theme4',
  templateUrl: './theme4.component.html',
  styleUrls: ['./theme4.component.css',
    './Assets/css/animate.min.css',
    './Assets/css/bootstrap-dropdownhover.min.css',
    './Assets/css/bootstrap-theme.css',
    './Assets/css/font-awesome.css',
    './Assets/css/magnific-popup.css',
    './Assets/css/media.css',
    './Assets/css/slick-theme.css',
    './Assets/css/slick.css',
    './Assets/css/all.css',
    './Assets/css/style.css'],
  encapsulation: ViewEncapsulation.None

})
export class Theme4Component implements OnInit {

  theme: Theme = {
    id: 4,
    name: 'theme'
  };

  constructor() { }

  ngOnInit() {
  }

}
