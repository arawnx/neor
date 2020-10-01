import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';
import { interval, Subscription } from 'rxjs';
import { ipcRenderer, IpcRenderer } from 'electron';
import { Model } from './interfaces/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  activeDest: string = 'inbox';
  model: Model;
  subscription: Subscription;

  constructor(private router: Router, public electronService: ElectronService) { 
    ipcRenderer.send('read-model');
    ipcRenderer.on('reply-model', (_, _model) => {
      this.model = _model;
    });
  }

  private saveModel() {
    this.electronService.ipcRenderer.send('save-model', JSON.stringify(this.model));
  }

  ngOnInit(): void { 
    this.subscription = interval(500).subscribe(_ => {
      this.saveModel();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  destinationChange(newDest) {
    this.activeDest = newDest;
  }

  updateModel(update: {
    key: string,
    value: any
  }) {
    this.model[update.key] = update.value;
  }
}
