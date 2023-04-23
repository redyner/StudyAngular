import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() rating?: number;
  @Output() ratingChange = new EventEmitter<number>();
  stars: number[] = [1,2,3,4,5]

  onClick(star: number)
  {
    this.ratingChange.emit(star);
  }

}
