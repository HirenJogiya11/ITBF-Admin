import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourtotaluserComponent } from './tourtotaluser.component';

describe('TourtotaluserComponent', () => {
  let component: TourtotaluserComponent;
  let fixture: ComponentFixture<TourtotaluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourtotaluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourtotaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
