import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme4Header1Component } from './theme4header1.component';

describe('Theme4Header1Component', () => {
  let component: Theme4Header1Component;
  let fixture: ComponentFixture<Theme4Header1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme4Header1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme4Header1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
