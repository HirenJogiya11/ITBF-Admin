import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaudiopackComponent } from './newaudiopack.component';

describe('NewaudiopackComponent', () => {
  let component: NewaudiopackComponent;
  let fixture: ComponentFixture<NewaudiopackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaudiopackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaudiopackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
