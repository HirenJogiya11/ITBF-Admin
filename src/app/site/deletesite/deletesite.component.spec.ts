import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesiteComponent } from './deletesite.component';

describe('DeletesiteComponent', () => {
  let component: DeletesiteComponent;
  let fixture: ComponentFixture<DeletesiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletesiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
