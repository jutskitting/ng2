import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme3Header1Component } from './theme3header1.component';

describe('Theme3Header1Component', () => {
  let component: Theme3Header1Component;
  let fixture: ComponentFixture<Theme3Header1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme3Header1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme3Header1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
