import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteaudioComponent } from './deleteaudio.component';

describe('DeleteaudioComponent', () => {
  let component: DeleteaudioComponent;
  let fixture: ComponentFixture<DeleteaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
