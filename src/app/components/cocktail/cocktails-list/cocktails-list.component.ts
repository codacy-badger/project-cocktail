import {Component, OnInit} from '@angular/core';
import {Cocktail} from '../../../core/models';
import {CocktailService} from '../../../core/services';
import {UnsubscribeOnDestroyAdapter} from '../../../core/adapters';

@Component({
	selector: 'app-cocktails-list',
	templateUrl: './cocktails-list.component.html',
	styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

	public cocktails: Cocktail[];
	public activeCocktail: number;

	constructor(
		private cocktailService: CocktailService,
	) {
		super();
		this.instantiation();
	}

	ngOnInit(): void {
		this.getCocktails();
	}

	getCocktails() {
		this.subs.sink = this.cocktailService.getCocktails()
			.subscribe((cocktails: Cocktail[]) => this.cocktails = cocktails);
	}

	instantiation() {
		this.activeCocktail = 0;
	}
}
