import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHeadComponent } from './component-head.component';

describe('ComponentHeadComponent', () => {
  let component: ComponentHeadComponent;
  let fixture: ComponentFixture<ComponentHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
