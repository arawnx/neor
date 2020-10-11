import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Model } from 'app/home/interfaces/model';
import * as fas from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() model: Model;

  currentlyEditing: number;

  fas = fas;

  constructor() { }

  daysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  sortCalendar() {
    this.model.calendar.items.sort((a, b) => {
      const sumDate = {
        year: a.date.year - b.date.year,
        month: a.date.month - b.date.month,
        day: a.date.day - b.date.day
      };

      if(sumDate.year !== 0) {
        return sumDate.year;
      } else if(sumDate.month !== 0) {
        return sumDate.month;
      } else if(sumDate.day !== 0) {
        return sumDate.day;
      }

      return 0;
    });
  }

  ngOnInit(): void {
    this.sortCalendar();
  }
}
