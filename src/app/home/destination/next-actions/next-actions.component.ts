import { Component, Input, OnInit } from '@angular/core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { Model } from 'app/home/interfaces/model';

@Component({
  selector: 'app-next-actions',
  templateUrl: './next-actions.component.html',
  styleUrls: ['./next-actions.component.scss']
})
export class NextActionsComponent implements OnInit {
  @Input() model: Model;

  fas = fas;

  constructor() { }

  ngOnInit(): void {

  }

  archiveItem(evt, index: number) {
    evt.stopPropagation();
    const item = this.model['next-actions'].items[index];
    this.model.archive.items.push({
      name: item.name,
      history: {
        prevDest: 'next-actions',
        metadata: undefined
      }
    });
    this.model['next-actions'].items.splice(index, 1);
  }
}
