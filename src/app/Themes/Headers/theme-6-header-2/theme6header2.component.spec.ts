import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme6Header2Component } from './theme6header2.component';

describe('Theme6Header1Component', () => {
  let component: Theme6Header2Component;
  let fixture: ComponentFixture<Theme6Header2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme6Header2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme6Header2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
