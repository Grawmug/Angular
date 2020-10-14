import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
  public form: FormGroup;
  @Output() save = new EventEmitter<Pizza>();

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(0, Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      photoUrl: new FormControl(),
    });
  }

  submitForm() {
    this.save.emit(this.form.value);
  }

}
