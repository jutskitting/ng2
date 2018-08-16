import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1Header1Component } from './theme1header1.component';

describe('Header1Component', () => {
  let component: Theme1Header1Component;
  let fixture: ComponentFixture<Theme1Header1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1Header1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1Header1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
