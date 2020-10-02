import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'app/home/interfaces/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() model: Model;

  constructor() { }

  ngOnInit(): void {
  }

}
