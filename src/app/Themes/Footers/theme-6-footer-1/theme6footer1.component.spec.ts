import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme6Footer1Component } from './theme6footer1.component';

describe('Theme6Footer1Component', () => {
  let component: Theme6Footer1Component;
  let fixture: ComponentFixture<Theme6Footer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme6Footer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme6Footer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
