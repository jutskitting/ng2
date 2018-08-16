import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme3Footer1Component } from './theme3footer1.component';

describe('Theme3Footer1Component', () => {
  let component: Theme3Footer1Component;
  let fixture: ComponentFixture<Theme3Footer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme3Footer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme3Footer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
