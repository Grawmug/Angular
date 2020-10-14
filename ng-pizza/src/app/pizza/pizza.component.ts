import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { SlicePipe } from '@angular/common';

@Pipe({ name: 'dots' })
export class ThreeDotsPipe implements PipeTransform {
  constructor(private slice: SlicePipe) {
  }

  transform(value: any, start: number, end?: number): string {
    return this.slice.transform(value, start, end) + (value.length > (end) ? '...' : '');
  }
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[] = [];
  query = '';
  selectedPizzas = [];

  pageSize = 10;
  totalPizzas = 0;

  constructor(private pizzaSvc: PizzaService) { }

  getShortName(pizzaName: string, length = 10) {
    if (pizzaName) {
      return pizzaName.substr(0, length) + (pizzaName.length > length ? '...' : '');
    }
    return '';
  }

  ngOnInit() {
    this.getPizzaList();
  }

  addPizza(pizza: Pizza) {
    this.pizzaSvc.addPizza(pizza).subscribe(() => this.getPizzaList());
  }

  removePizza(pizza: Pizza) {
    this.pizzaSvc.removePizza(pizza).subscribe(
      () => this.getPizzaList()
    );
  }

  onSearch(query: string) {
    this.query = query;
  }

  pageChanged(event) {
    const offset = event.pageIndex * event.pageSize;
    this.getPizzaList(offset);
  }

  pizzaSelect(pizza: Pizza) {
    const id = pizza.id;
    if (this.selectedPizzas.includes(id)) {
      this.selectedPizzas = this.selectedPizzas.filter((selectedId) => selectedId !== id);
    } else {
      this.selectedPizzas = [
        ...this.selectedPizzas,
        id
      ];
    }
  }

  private getPizzaList(offset = 0) {
    this.pizzaSvc.getPizzas(offset).subscribe(response => {
      this.pizzas = response.value;
      this.totalPizzas = response.size;
    });
  }
}
