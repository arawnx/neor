import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Model } from '../interfaces/model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})

export class DestinationComponent implements OnInit {
  @Input() activeDest: string = 'inbox';
  @Input() model: Model;

  constructor() { }

  ngOnInit(): void {
  }
}
