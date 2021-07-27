import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Item {
  value: string;
  viewValue: string;
}

interface ItemGroup {
  disabled?: boolean;
  name: string;
  item: Item[];
}

@Component({
  selector: 'app-enter-record',
  templateUrl: './enter-record.component.html',
  styleUrls: ['./enter-record.component.css'],
})
export class EnterRecordComponent implements OnInit {
  quantity = new FormControl('', [Validators.required]);

  item = new FormControl();
  itemGroups: ItemGroup[] = [
    {
      name: 'Groceries',
      item: [
        { value: 'Sugar', viewValue: 'Sugar' },
        { value: 'Tea', viewValue: 'Tea' },
        { value: 'Milk', viewValue: 'Milk' },
      ],
    },
    {
      name: 'Water',
      item: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' },
      ],
    },
    {
      name: 'Fire',
      disabled: true,
      item: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' },
      ],
    },
    {
      name: 'Psychic',
      item: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onSubmit(itemForm: any) {
    console.log(itemForm.value);
  }
}
