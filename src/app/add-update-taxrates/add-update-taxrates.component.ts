import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-update-taxrates',
  templateUrl: './add-update-taxrates.component.html',
  styleUrls: ['./add-update-taxrates.component.css'],
})
export class AddUpdateTaxratesComponent implements OnInit {
  addUpdateForm: FormGroup;

  buttonType: String = 'Add';

  constructor(private formBuilder: FormBuilder) {
    this.addUpdateForm = this.formBuilder.group({
      item: ['', [Validators.required]],
      taxRate: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get formControls() {
    return this.addUpdateForm.controls;
  }
  onSubmit() {
    console.log(this.addUpdateForm.value);
  }
}
