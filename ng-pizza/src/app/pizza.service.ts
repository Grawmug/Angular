import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzaResponse, Pizza } from './pizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private url = 'https://ng-pizza.azurewebsites.net';

  constructor(private http: HttpClient) { }

  getPizzas(offset = 0, limit = 6): Observable<PizzaResponse> {
    const params = {
      limit: limit.toString(),
      offset: offset.toString()
    };
    return this.http.get<PizzaResponse>(`${this.url}/api/pizzas`, { params });
  }

  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`${this.url}/api/pizzas`, pizza);
  }

  removePizza(pizza: Pizza) {
    return this.http.delete(`${this.url}/api/pizzas/${pizza.id}`);
  }
}
