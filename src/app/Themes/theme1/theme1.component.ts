import { Component, OnInit } from '@angular/core';
import { Theme } from '../theme'
@Component({
  selector: 'app-theme1',
  templateUrl: './theme1.component.html',
  styleUrls: ['./theme1.component.css']
})
export class Theme1Component implements OnInit {

  theme: Theme = {
    id: 1,
    name: 'theme'
  };

  constructor() { }

  ngOnInit() {
  }

}
