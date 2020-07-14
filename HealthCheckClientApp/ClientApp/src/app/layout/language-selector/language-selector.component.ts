// Angular
import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap'
// RxJS
import { filter } from 'rxjs/operators';
// Translate

interface LanguageFlag {
	lang: string;
	name: string;
	flag: string;
	active?: boolean;
}

@Component({
	selector: 'kt-language-selector',
	templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent implements OnInit {
	// Public properties
	@HostBinding('class') classes = '';
	@Input() iconType: '' | 'brand';

	language: LanguageFlag;
	languages: LanguageFlag[] = [
		{
			lang: 'en',
			name: 'English',
			flag: './assets/media/flags/260-united-kingdom.svg'
		},
		{
			lang: 'ch',
			name: 'Mandarin',
			flag: './assets/media/flags/034-china.svg'
		},
		{
			lang: 'es',
			name: 'Spanish',
			flag: './assets/media/flags/128-spain.svg'
		},
		{
			lang: 'jp',
			name: 'Japanese',
			flag: './assets/media/flags/063-japan.svg'
		},
		{
			lang: 'de',
			name: 'German',
			flag: './assets/media/flags/162-germany.svg'
		},
		{
			lang: 'fr',
			name: 'French',
			flag: './assets/media/flags/195-france.svg'
		},
	];

	/**
	 * Component constructor
	 *
	 * @param translationService: TranslationService
	 * @param router: Router
	 */
	constructor() {
		this.language = this.languages[0];
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		// this.language = {
		// 	lang: 'en',
		// 	name: 'English',
		// 	flag: './assets/media/flags/260-united-kingdom.svg'
		// };

	}

	/**
	 * Set language
	 *
	 * @param lang: any
	 */
	setLanguage(lang) {

	}

	/**
	 * Set selected language
	 */
	setSelectedLanguage(): any {

	}
}
