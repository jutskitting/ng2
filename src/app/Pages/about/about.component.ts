import { Component, OnInit, Directive, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Body3Component } from '../../Components/Bodies/body3/body3.component'
import { Body } from '../../Components/Bodies/body';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Body4Component } from '../../Components/Bodies/body4//body4.component';
import { BodiesListService } from 'src/app/Components/bodieslist/bodieslistservice';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
@Directive({
  selector: '[body-host]',
})

export class AboutComponent implements OnInit {

  body$: Observable<Body>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BodiesListService
  ) {

  }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.body$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getBodyById(params.get('id')))
    )
    
  }

  gotoBodies(body: Body) {
    let BodyId = body ? body.BodyId : null;

    this.router.navigate(['/about', { id: BodyId}]);
  }
  
}
