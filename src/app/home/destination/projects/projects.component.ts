import { Component, Input, OnInit } from '@angular/core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { Model } from 'app/home/interfaces/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  @Input() model: Model;
  activePlanning: string;
  currentlyEditing: number;

  fas = fas;

  constructor() { }

  ngOnInit(): void {
  }

  archiveProject(evt, index: number) {
    evt.stopPropagation();
    const item = this.model.projects.items.splice(index, 1)[0];
    this.model.archive.items.push({
      name: item.name,
      history: {
        prevDest: 'projects',
        metadata: {
          purpPrinciples: item.purpPrinciples,
          vision: item.vision,
          brainstorm: item.brainstorm,
          organizing: item.organizing,
          nextActions: item.nextActions
        }
      }
    });
  }

  clearEdits() {
    this.currentlyEditing = undefined;
    this.model.inbox.items = this.model.inbox.items.filter(item => {
      return item.name.trim() !== "";
    });
  }
}
