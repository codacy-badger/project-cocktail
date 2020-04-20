import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.css'],
	animations: [
		trigger('fly', [
			state('active', style(
				{backgroundColor: '#81C784'})
			),
			state('inactive', style(
				{backgroundColor: '#FF7043'})
			),
			state('cercle', style({
					backgroundColor: '#29B6F6',
					borderRadius: '50%'
				})
			),
			transition('active => inactive', animate('1s 2000ms ease-in')),
			transition('* => cercle', animate('1s ease-in')),
			transition('cercle => *', animate('1s ease-out')),
			transition('void => active', [
				style({backgroundColor: '#1565C0'}),
				animate('1s ease-out')
			]),
			transition('* => void', [
				animate('1s 0ms ease-in', style({backgroundColor: '#5C6BC0'}))
			]),
			transition('active => inactive', animate('1s 200ms ease-out'))
		])
	]
})
export class BasketComponent implements OnInit {

	currentState: string;

	constructor() {
		this.currentState = 'active';
	}

	ngOnInit(): void {
	}

}
