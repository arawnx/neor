import { Component, Input, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { Model } from '../interfaces/model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})

export class ArchiveComponent implements OnInit {
  @Input() model: Model;

  fas = fas;

  constructor() { }

  ngOnInit(): void { }

  restoreItem(evt, index) {
    evt.stopPropagation();
    const item = this.model.archive.items[index];
    this.model.archive.items.splice(index, 1);
    this.model[item.history.prevDest].items.push(item);
  }

  deletePermanently(evt, index) {
    evt.stopPropagation();
    this.model.archive.items.splice(index, 1);
  }
}
