import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Challan1Component } from './challan1.component';

describe('Challan1Component', () => {
  let component: Challan1Component;
  let fixture: ComponentFixture<Challan1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Challan1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Challan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
