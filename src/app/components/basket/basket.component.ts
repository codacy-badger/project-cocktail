import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.css'],
	animations: [
		trigger('fly', [
			state('active', style(
				{color: '#ffff'})
			),
			state('inactive', style(
				{color: 'frg555'})
			),
			transition('active => defective', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out'))
		])
	]
})
export class BasketComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
