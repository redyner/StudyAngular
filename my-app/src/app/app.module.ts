import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { WinnerModalComponent } from './modais/winner-modal/winner-modal.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilmesComponent } from './filmes/filmes.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    TicTacToeComponent,
    WinnerModalComponent,
    TodoListComponent,
    FilmesComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
