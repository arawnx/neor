import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'app/home/interfaces/model';
import * as fas from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {
  @Input() model: Model;

  fas = fas;

  constructor() { }

  ngOnInit(): void {
  }
  
  archiveItem(idx: number) {
    const item = this.model.waiting.items.splice(idx, 1)[0];
    this.model.archive.items.push({
      name: item.name,
      history: {
        prevDest: 'waiting',
        metadata: undefined
      }
    });
  }
}
