import {Component, OnInit} from '@angular/core';
import {CocktailService} from '../../../core/services';
import {Cocktail} from '../../../core/models';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UnsubscribeOnDestroyAdapter} from '../../../core/adapters';

@Component({
	selector: 'app-cocktail-details',
	templateUrl: './cocktail-details.component.html',
	styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

	public cocktail: Cocktail;
	private index: number;

	constructor(
		private cocktailService: CocktailService,
		private route: ActivatedRoute
	) {
		super();
	}

	ngOnInit(): void {
		this.getCocktail();
		console.log(this.getCocktail());
	}

	getCocktail() {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.index = params.get('index') ? parseInt(params.get('index'), 10) : 0;
			console.log(params.get('index'));
			this.subs.sink = this.cocktailService.getCocktailByIndex(this.index).subscribe((cocktail: Cocktail) => {
				this.cocktail = cocktail;
			});
		});
	}

	getUrl(): string[] {
		const index = this.index.toString();
		return ['/cocktails', index, 'edit'];
	}
}
