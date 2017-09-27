import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelanguageComponent } from './createlanguage.component';

describe('CreatelanguageComponent', () => {
  let component: CreatelanguageComponent;
  let fixture: ComponentFixture<CreatelanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
