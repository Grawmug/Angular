import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.css']
})
export class PizzaEditorComponent {
  public showEditor = false;

  @Output() add = new EventEmitter();

  addPizza() {
    this.showEditor = !this.showEditor;
  }

  savePizza(pizza: Partial<Pizza>) {
    this.add.emit(pizza);
  }
}
