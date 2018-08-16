import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1Footer1Component } from './theme1footer1.component';

describe('Theme1Footer1Component', () => {
  let component: Theme1Footer1Component;
  let fixture: ComponentFixture<Theme1Footer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1Footer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1Footer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
