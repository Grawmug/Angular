import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent, ThreeDotsPipe } from './pizza/pizza.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaEditorComponent } from './pizza-editor/pizza-editor.component';
import { SlicePipe } from '@angular/common';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { HomeComponent } from './home/home.component';
import { PizzaFilterPipe } from './pizza-filter.pipe';

// DONE 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// DONE 2: Dodaj komponent PizzaEditor za pomoca Angular CLI: ng g c pizza-editor

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    ThreeDotsPipe,
    PizzaDetailsComponent,
    PizzaFormComponent,
    HomeComponent,
    PizzaFilterPipe
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [SlicePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
