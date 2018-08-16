import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme6Header3Component } from './theme6header3.component';

describe('Theme6Header1Component', () => {
  let component: Theme6Header3Component;
  let fixture: ComponentFixture<Theme6Header3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme6Header3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme6Header3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
