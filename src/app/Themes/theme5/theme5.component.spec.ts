import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme5Component } from './theme5.component';

describe('Theme5Component', () => {
  let component: Theme5Component;
  let fixture: ComponentFixture<Theme5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
