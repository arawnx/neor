import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as fas from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  @Input() items: {
    id: number;
    name: string;
    editing: boolean;
  }[];
  @Output() inboxUpdate = new EventEmitter();

  @ViewChild('editInput') editInput: ElementRef;
  
  fas = fas;

  constructor() { }

  ngOnInit(): void {
    this.clearEdits();
  }

  ngOnDestroy() {
    this.inboxUpdate.emit(this.items);
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler() {
    this.inboxUpdate.emit(this.items);
  }

  get nextId(): number {
    let res = 0;
    this.items.forEach(item => {
      console.log(item.id);
      if(item.id >= res)
        res = item.id+1;
    });
    return res;
  }

  addItem() {
    this.clearEdits();
    this.items.push({
      id: this.nextId,
      name: "",
      editing: true
    });
    console.log(this.items[this.items.length-1]);
  }

  editItem(id: number) {
    this.items.forEach(item => {
      if(item.id === id) {
        item.editing = true;
      } else {
        item.editing = false;
      }
    });
  }

  clearEdits() {
    this.items.forEach(item => {
      item.editing = false;
    });

    this.items.filter(item => {
      item.name !== "";
    })
  }
}
