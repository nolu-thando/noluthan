import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ItemCardComponent } from './item-card/item-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    BudgetListComponent,
    AddItemsComponent,
    ItemCardComponent

  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
