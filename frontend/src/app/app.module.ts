import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
