import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as fas from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
	@Output() destinationChange = new EventEmitter<string>();
	activeDest: string = 'inbox';
	fas = fas;

	dests = [
		{
			name: "inbox",
			icon: fas.faInbox
		},
		{
			name: "next-actions",
			icon: fas.faTasks
		},
		{
			name: "projects",
			icon: fas.faClipboardList
		},
		{
			name: "calendar",
			icon: fas.faCalendar
		},
		{
			name: "waiting",
			icon: fas.faUserClock
		},
		{
			name: "weekly-review",
			icon: fas.faMountain
		},
		{
			name: "someday-maybe",
			icon: fas.faLightbulb
		},
		{
			name: "archive",
			icon: fas.faArchive
		}
	];

	constructor() { }

	ngOnInit(): void {

	}

	changeDestination(evt: any) {
		this.activeDest = evt.target.innerHTML.toLowerCase().split(' ')[0];
		this.destinationChange.emit(this.activeDest);
	}
}
