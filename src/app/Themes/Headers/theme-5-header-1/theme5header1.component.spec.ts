import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme5Header1Component } from './theme5header1.component';

describe('Theme5Header1Component', () => {
  let component: Theme5Header1Component;
  let fixture: ComponentFixture<Theme5Header1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme5Header1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme5Header1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
