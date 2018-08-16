import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme4Footer1Component } from './theme4footer1.component';

describe('Theme4Footer1Component', () => {
  let component: Theme4Footer1Component;
  let fixture: ComponentFixture<Theme4Footer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme4Footer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme4Footer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
