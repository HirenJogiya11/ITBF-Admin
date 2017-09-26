import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittotalsiteComponent } from './edittotalsite.component';

describe('EdittotalsiteComponent', () => {
  let component: EdittotalsiteComponent;
  let fixture: ComponentFixture<EdittotalsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittotalsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittotalsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
