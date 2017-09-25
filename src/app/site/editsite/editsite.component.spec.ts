import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsiteComponent } from './editsite.component';

describe('EditsiteComponent', () => {
  let component: EditsiteComponent;
  let fixture: ComponentFixture<EditsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
