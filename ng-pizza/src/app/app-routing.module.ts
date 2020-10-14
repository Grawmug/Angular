import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';

// Przyklad: https://github.com/Banndzior/ng-routing/blob/master/ng-routing_gr1/src/app/app-routing.module.ts
// DONE 7: Stworz routing dla listy pizz: pizza component: /pizza
// DONE 7+: Stworz routing dla pizzy po jej id/nazwie: /pizza/33/marg
// DONE 10: Stworz routing dla listy pizz z parametrem nazwa/fragment nazwy: /pizza/:id

const routes: Routes = [
  { path: '', redirectTo: 'pizza', pathMatch: 'full' },
  { path: 'pizza', component: PizzaComponent },
  { path: 'pizza/:id', component: PizzaDetailsComponent },
  { path: 'pizza/:id/:name', component: PizzaDetailsComponent },
  { path: '**', redirectTo: 'pizza' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
