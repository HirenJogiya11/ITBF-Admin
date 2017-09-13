import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalrevenueComponent } from './totalrevenue.component';

describe('TotalrevenueComponent', () => {
  let component: TotalrevenueComponent;
  let fixture: ComponentFixture<TotalrevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalrevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
