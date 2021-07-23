import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateTaxratesComponent } from './add-update-taxrates.component';

describe('AddUpdateTaxratesComponent', () => {
  let component: AddUpdateTaxratesComponent;
  let fixture: ComponentFixture<AddUpdateTaxratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateTaxratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateTaxratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
