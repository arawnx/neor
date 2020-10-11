import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'app/home/interfaces/model';

@Component({
  selector: 'app-weekly-review',
  templateUrl: './weekly-review.component.html',
  styleUrls: ['./weekly-review.component.scss']
})
export class WeeklyReviewComponent implements OnInit {
  @Input() model: Model;

  constructor() { }

  ngOnInit(): void {
  }

}
