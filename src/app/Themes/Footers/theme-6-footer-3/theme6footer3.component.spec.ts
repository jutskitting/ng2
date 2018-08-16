import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme6Footer3Component } from './theme6footer3.component';

describe('Theme6Footer1Component', () => {
  let component: Theme6Footer3Component;
  let fixture: ComponentFixture<Theme6Footer3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme6Footer3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme6Footer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
