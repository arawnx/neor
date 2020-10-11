import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';

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
import { ProjectPlanningComponent } from './destination/projects/project-planning/project-planning.component';
import { WaitingComponent } from './destination/waiting/waiting.component';
import { WeeklyReviewComponent } from './destination/weekly-review/weekly-review.component';
import { SomedayMaybeComponent } from './destination/someday-maybe/someday-maybe.component';
import { CalendarComponent } from './destination/calendar/calendar.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, DestinationComponent, InboxComponent, AutofocusDirective, ArchiveComponent, NextActionsComponent, ProjectsComponent, ItemComponent, ProjectPlanningComponent, WaitingComponent, WeeklyReviewComponent, SomedayMaybeComponent, CalendarComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, FontAwesomeModule, CoreModule, FormsModule, AutosizeModule],
})
export class HomeModule {}
