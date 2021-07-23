import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-taxrates',
  templateUrl: './add-update-taxrates.component.html',
  styleUrls: ['./add-update-taxrates.component.css']
})
export class AddUpdateTaxratesComponent implements OnInit {

  itemFormControl = new FormControl('', [
    Validators.required,
  ]);

  buttonType:String="Add";

  constructor() { }

  ngOnInit(): void {
  }

}
