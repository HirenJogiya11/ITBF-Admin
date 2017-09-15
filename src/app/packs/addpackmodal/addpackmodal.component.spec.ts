import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpackmodalComponent } from './addpackmodal.component';

describe('AddpackmodalComponent', () => {
  let component: AddpackmodalComponent;
  let fixture: ComponentFixture<AddpackmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpackmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpackmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
