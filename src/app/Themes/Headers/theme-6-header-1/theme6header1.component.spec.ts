import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme6Header1Component } from './theme6header1.component';

describe('Theme6Header1Component', () => {
  let component: Theme6Header1Component;
  let fixture: ComponentFixture<Theme6Header1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme6Header1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme6Header1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
