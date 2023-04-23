import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  movies = 
  [
    {title: 'Watchmen', rating: 5},
    {title: 'Vingadores', rating: 3},
    {title: 'Sonic', rating: 5},
    {title: 'Click', rating: 5},
    {title: 'Vôo da Fênix', rating: 4}
  ]

}
