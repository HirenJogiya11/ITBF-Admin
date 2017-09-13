import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourtotalrevenueComponent } from './tourtotalrevenue.component';

describe('TourtotalrevenueComponent', () => {
  let component: TourtotalrevenueComponent;
  let fixture: ComponentFixture<TourtotalrevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourtotalrevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourtotalrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
