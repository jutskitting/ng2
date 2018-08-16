import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme2Header1Component } from './theme2header1.component';

describe('Theme2Header1Component', () => {
  let component: Theme2Header1Component;
  let fixture: ComponentFixture<Theme2Header1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme2Header1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme2Header1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
