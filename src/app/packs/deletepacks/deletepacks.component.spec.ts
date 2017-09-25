import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepacksComponent } from './deletepacks.component';

describe('DeletepacksComponent', () => {
  let component: DeletepacksComponent;
  let fixture: ComponentFixture<DeletepacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
