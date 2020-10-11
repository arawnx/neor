import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'app/home/interfaces/model';
import * as fas from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-someday-maybe',
  templateUrl: './someday-maybe.component.html',
  styleUrls: ['./someday-maybe.component.scss']
})
export class SomedayMaybeComponent implements OnInit {
  @Input() model: Model;

  fas = fas;

  constructor() { }

  ngOnInit(): void {
  }
  
  activateProject(idx: number) {
    const item = this.model["someday-maybe"].items.splice(idx, 1)[0];
    this.model.projects.items.unshift({
      name: item.name,
      purpPrinciples: "",
      vision: "",
      brainstorm: "",
      organizing: "",
      nextActions: []
    });
  }

  archive(idx: number) {
    const item = this.model["someday-maybe"].items.splice(idx, 1)[0];
    this.model.archive.items.unshift({
      name: item.name,
      history: {
        prevDest: 'someday-maybe',
        metadata: undefined
      }
    });
  }
}
