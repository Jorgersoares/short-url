import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyPopupComponent } from './copy-popup.component';

describe('CopyPopupComponent', () => {
  let component: CopyPopupComponent;
  let fixture: ComponentFixture<CopyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
