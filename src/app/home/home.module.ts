import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { DestinationComponent } from './destination/destination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InboxComponent } from './destination/inbox/inbox.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ArchiveComponent } from './destination/archive/archive.component';
import { NextActionsComponent } from './destination/next-actions/next-actions.component';
import { ProjectsComponent } from './destination/projects/projects.component';
import { ItemComponent } from './destination/item/item.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, DestinationComponent, InboxComponent, AutofocusDirective, ArchiveComponent, NextActionsComponent, ProjectsComponent, ItemComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, FontAwesomeModule, CoreModule, FormsModule],
})
export class HomeModule {}
