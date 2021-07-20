import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRecordComponent } from './enter-record.component';

describe('EnterRecordComponent', () => {
  let component: EnterRecordComponent;
  let fixture: ComponentFixture<EnterRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
