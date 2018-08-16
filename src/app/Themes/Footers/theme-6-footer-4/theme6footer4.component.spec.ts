import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme6Footer4Component } from './theme6footer4.component';

describe('Theme6Footer4Component', () => {
  let component: Theme6Footer4Component;
  let fixture: ComponentFixture<Theme6Footer4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme6Footer4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme6Footer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
