import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Cocktail} from '../models';
import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Constants} from '../constants';

@Injectable({
	providedIn: 'root'
})
export class CocktailService {

	public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

	constructor(
		private http: HttpClient,
		private apiService: ApiService
	) {
		this.getCocktails();
	}

	getCocktails(): Observable<Cocktail[]> {
		return this.apiService.get(Constants.COCKTAILS)
			.pipe(map((cocktails: Cocktail[]) => {
				this.cocktails.next(cocktails);
				return cocktails;
			}));
	}

	public getCocktailByIndex(index: any): Observable<Cocktail> {
		return this.apiService.get(Constants.COCKTAILS)
			.pipe(
				filter((cocktails: Cocktail[]) => cocktails !== null),
				map((cocktails: Cocktail[]) => cocktails[index])
			);
	}

	createAndUpdateCocktail(cocktail: Cocktail, action: number) {
		const currentCocktail = this.cocktails.value.slice();
		if (action === 1) {
			currentCocktail.push(cocktail);
		} else {
			const index: number = currentCocktail.findIndex(element => element.name === cocktail.name);
			currentCocktail[index] = cocktail;
			console.log(JSON.stringify(currentCocktail[index]));
		}
		return this.apiService.put(Constants.COCKTAILS, currentCocktail)
			.pipe(map((cocktails: Cocktail[]) => {
				return cocktails;
			})).subscribe((cocktails: Cocktail[]) => {
				this.cocktails.next(cocktails);
				console.log(JSON.stringify(this.cocktails));
			});
	}
}
