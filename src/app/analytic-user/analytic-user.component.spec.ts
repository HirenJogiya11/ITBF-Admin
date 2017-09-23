import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticUserComponent } from './analytic-user.component';

describe('AnalyticUserComponent', () => {
  let component: AnalyticUserComponent;
  let fixture: ComponentFixture<AnalyticUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
