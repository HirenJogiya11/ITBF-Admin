import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldownloadComponent } from './totaldownload.component';

describe('TotaldownloadComponent', () => {
  let component: TotaldownloadComponent;
  let fixture: ComponentFixture<TotaldownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaldownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
