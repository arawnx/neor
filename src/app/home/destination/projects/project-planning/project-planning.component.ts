import { Component,Input, OnInit } from '@angular/core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { Model } from 'app/home/interfaces/model';

@Component({
  selector: 'app-project-planning',
  templateUrl: './project-planning.component.html',
  styleUrls: ['./project-planning.component.scss']
})

export class ProjectPlanningComponent implements OnInit {
  @Input() model: Model;
  @Input() projectId: number;

  fas = fas;

  currentlyEditing: number;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.model.projects.items[this.projectId].nextActions.push({
      name: ""
    });

    this.currentlyEditing = this.model.projects.items[this.projectId].nextActions.length-1;
  }

  clearEdits() {
    this.currentlyEditing = undefined;
    this.model.projects.items[this.projectId].nextActions = this.model.projects.items[this.projectId].nextActions.filter(item => {
      return item.name.trim() !== "";
    });
  }
}
