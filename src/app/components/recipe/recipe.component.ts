import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.css'],
	animations: [
		trigger('slideStatus', [
			state('inactive', style({backgroundColor: 'blue'})),
			state('active', style({backgroundColor: 'orange'})),

			transition('* => active', [
				animate('2s', keyframes([
					style({backgroundColor: 'blue', offset: 0}),
					style({backgroundColor: 'red', offset: 0.8}),
					style({backgroundColor: 'orange', offset: 1.0})
				])),
			]),
			transition('* => inactive', [
				animate('2s', keyframes([
					style({backgroundColor: 'orange', offset: 0}),
					style({backgroundColor: 'red', offset: 0.2}),
					style({backgroundColor: 'blue', offset: 1.0})
				]))
			]),

			transition('* => active', [
				animate('2s', keyframes([
					style({backgroundColor: 'blue'}),
					style({backgroundColor: 'red'}),
					style({backgroundColor: 'orange'})
				]))
			]),
		])
	]
})
export class RecipeComponent implements OnInit {

	status: 'active' | 'inactive' = 'inactive';

	constructor() {
	}

	ngOnInit(): void {
	}

	toggle() {
		if (this.status === 'active') {
			this.status = 'inactive';
		} else {
			this.status = 'active';
		}
	}

}
