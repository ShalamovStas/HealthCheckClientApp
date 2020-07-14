// Angular
import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
// RxJS
import { filter } from 'rxjs/operators';


@Component({
	selector: 'kt-dropdown',
	templateUrl: './dropdown.component.html',
})

export class DropdownComponent implements OnInit {


	constructor(private _router: Router) {
	}


	ngOnInit() {
	}

	logout() {
		localStorage.removeItem("currentUser");
		this._router.navigate(['/login']);

	}
}
