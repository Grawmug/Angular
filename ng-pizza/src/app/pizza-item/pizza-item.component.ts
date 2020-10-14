import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent {
  @Input()
  pizza: Pizza;

  @Input()
  active: boolean = false;

  @Output()
  remove = new EventEmitter();

  removePizza(pizza: Pizza) {
    this.remove.emit();
  }

  modifyPizza() {
    // ? update obrazka
  }
}
