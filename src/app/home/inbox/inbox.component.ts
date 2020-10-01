import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { Model } from '../interfaces/model';

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
    if(dest === 'archive') {
      this.model.archive.items.unshift({
        name: this.model.inbox.items[index].name,
        history: {
          prevDest: 'inbox',
          metadata: null
        }
      })
    }
    this.model.inbox.items.splice(index, 1);
  }
}
