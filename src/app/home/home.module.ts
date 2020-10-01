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
import { InboxComponent } from './inbox/inbox.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, DestinationComponent, InboxComponent, AutofocusDirective, ArchiveComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, FontAwesomeModule, CoreModule, FormsModule],
})
export class HomeModule {}
