import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Body } from '../body';
import { BodiesListService } from '../../BodyList/bodieslistservice';

@Component({
  selector: 'app-body4',
  templateUrl: './body4.component.html',
 
  animations: [
    trigger('state', [
      state('opened', style({ transform: 'translateY(0%)' })),
      state('void, closed', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styleUrls: ['./body4.component.css']
})

export class Body4Component implements OnInit {



  public body: Body = {
    BodyId: 4,
    BodyName: 'about'
  };
  
  constructor(
    private route: ActivatedRoute,
    private bodylistService: BodiesListService,
    private location: Location
  )
  { }
  
  ngOnInit(): void {
    
      this.getBody();
    }
    getBody(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.bodylistService.getBodyById(id)
        .subscribe(body => this.body = body);
    }

  }




