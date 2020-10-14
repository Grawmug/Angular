import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.form.valueChanges.subscribe(({ name }) => this.search.emit(name));
  }

  clearSearch() {
    this.form.get('name').setValue('');
  }

}
