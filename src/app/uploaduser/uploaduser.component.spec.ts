import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaduserComponent } from './uploaduser.component';

describe('UploaduserComponent', () => {
  let component: UploaduserComponent;
  let fixture: ComponentFixture<UploaduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
