import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalaudioComponent } from './totalaudio.component';

describe('TotalaudioComponent', () => {
  let component: TotalaudioComponent;
  let fixture: ComponentFixture<TotalaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
