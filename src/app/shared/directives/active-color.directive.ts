import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
	selector: '[appActiveColor]'
})
export class ActiveColorDirective {

	@HostBinding('style.backgroundColor') backgroundColor: string;
	@HostBinding('style.color') color: string;

	constructor() {
	}

	@Input('appActiveColor') set isActive(condition) {
		if (condition) {
			this.backgroundColor = '#80DEEA';
			this.color = '#263238';
		} else {
			this.backgroundColor = '#E1F5FE';
			this.color = '#4FC3F7';
		}
	}

}
