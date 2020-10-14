import { Pipe, PipeTransform } from '@angular/core';
import { Pizza } from './pizza';

@Pipe({
  name: 'pizzaFilter'
})
export class PizzaFilterPipe implements PipeTransform {

  transform(list: Pizza[], query: string): Pizza[] {
    return list.filter(({ name }) => name.includes(query));
  }

}
