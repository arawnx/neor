import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';
import { Model } from './interfaces/model';
import { interval, Subscription } from 'rxjs';
import { IpcRenderer } from 'electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  activeDest: string = 'inbox';
  model: Model;
  subscription: Subscription;

  constructor(private router: Router, public electronService: ElectronService) { }

  private saveModel() {
    this.electronService.ipcRenderer.send('save-model', this.model);
  }

  ngOnInit(): void { 
    this.subscription = interval(5000).subscribe(_ => {
      this.saveModel();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  destinationChange(newDest) {
    this.activeDest = newDest;
  }
}
