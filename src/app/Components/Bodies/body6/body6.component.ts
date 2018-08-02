import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Body } from '../body';


@Component({
  selector: 'app-body6',
  templateUrl: './body6.component.html',
  styleUrls: ['./body6.component.css']
})
  

export class Body6Component implements OnInit {

  public body: Body = {
    BodyId: 6,
    BodyName: 'contact'
  };

  images: Array<string>;

  constructor(private _http: HttpClient) {

  }
 

  ngOnInit() {
  }
}
