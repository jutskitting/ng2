import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme6Footer2Component } from './theme6footer2.component';

describe('Theme6Footer1Component', () => {
  let component: Theme6Footer2Component;
  let fixture: ComponentFixture<Theme6Footer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme6Footer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme6Footer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
