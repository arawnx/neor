import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { Model } from '../../interfaces/model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  @Input() model: Model;

  currentlyEditing: number;
  
  fas = fas;

  constructor() { }

  ngOnInit(): void { }

  addItem() {
    this.model.inbox.items.push({
      name: ""
    });
    this.currentlyEditing = this.model.inbox.items.length-1;
  }

  clearEdits() {
    this.currentlyEditing = undefined;
    this.model.inbox.items = this.model.inbox.items.filter(item => {
      return item.name.trim() !== "";
    });
  }

  organizeItem(evt, dest: string, index: number) {
    evt.stopPropagation();
    const item = this.model.inbox.items.splice(index, 1)[0];
    switch(dest) {
      case 'archive':
        this.model.archive.items.unshift({
          name: item.name,
          history: {
            prevDest: 'inbox',
            metadata: null
          }
        })
        break;
      case 'next-actions':
        this.model["next-actions"].items.unshift({
          name: item.name
        });
        break;
      case 'waiting':
        this.model.waiting.items.unshift({
          name: item.name
        });
        break;
      case 'someday-maybe':
        this.model["someday-maybe"].items.unshift({
          name: item.name
        });
        break;
      case 'projects':
        this.model.projects.items.unshift({
          name: item.name,
          purpPrinciples: "",
          vision: "",
          brainstorm: "",
          organizing: "",
          nextActions: []
        });
        break;
      case 'calendar': 
        const today = new Date();
        this.model.calendar.items.unshift({
          name: item.name,
          date: {
            year: today.getFullYear(),
            month: today.getMonth(),
            day: today.getDate()
          }
        });
        break;
    }
  }
}
