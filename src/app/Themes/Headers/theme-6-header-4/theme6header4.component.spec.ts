import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme6Header4Component } from './theme6header4.component';

describe('Theme6Header4Component', () => {
  let component: Theme6Header4Component;
  let fixture: ComponentFixture<Theme6Header4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme6Header4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme6Header4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
