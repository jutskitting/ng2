import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme5Footer1Component } from './theme5footer1.component';

describe('Theme5Footer1Component', () => {
  let component: Theme5Footer1Component;
  let fixture: ComponentFixture<Theme5Footer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme5Footer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme5Footer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
