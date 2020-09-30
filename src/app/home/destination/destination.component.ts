import { Component, Input, OnInit } from '@angular/core';
import { Model } from '../interfaces/model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})

export class DestinationComponent implements OnInit {
  @Input() activeDest: string = 'inbox';
  @Input() models: Model;

  constructor() { }

  ngOnInit(): void {
  }

  inboxUpdate(evt) {
    console.log(evt);
  }
}
