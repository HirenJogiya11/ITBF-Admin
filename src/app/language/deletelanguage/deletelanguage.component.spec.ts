import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelanguageComponent } from './deletelanguage.component';

describe('DeletelanguageComponent', () => {
  let component: DeletelanguageComponent;
  let fixture: ComponentFixture<DeletelanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletelanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
