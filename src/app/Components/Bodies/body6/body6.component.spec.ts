import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Body6Component } from './body6.component';

describe('Body6Component', () => {
  let component: Body6Component;
  let fixture: ComponentFixture<Body6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Body6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Body6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
