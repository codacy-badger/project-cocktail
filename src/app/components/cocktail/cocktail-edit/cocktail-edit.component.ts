import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cocktail, Ingredient} from '../../../core/models';
import {CocktailService} from '../../../core/services';
import {ActivatedRoute, Params} from '@angular/router';
import {UnsubscribeOnDestroyAdapter} from '../../../core/adapters';

@Component({
	selector: 'app-cocktail-edit',
	templateUrl: './cocktail-edit.component.html',
	styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

	public cocktailForm: FormGroup;
	public titleButton: string;
	public cocktail: Cocktail;
	public namePage: string;
	private editCheck: boolean;

	constructor(
		private fb: FormBuilder,
		private cocktailService: CocktailService,
		private activatedRoute: ActivatedRoute
	) {
		super();
		this.titleButton = 'Add Cocktail';
	}

	get ingredientForms() {
		return this.cocktailForm.get('ingredients') as FormArray;
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			if (params.index) {
				this.subs.sink = this.cocktailService.getCocktailByIndex(params.index).subscribe((cocktail: Cocktail) => {
					this.cocktail = cocktail;
					this.createFormCocktail(this.cocktail);
					this.editCheck = true;
				});
			} else {
				this.createFormCocktail();
				this.editCheck = false;
			}
		});
		this.getValueButton();
	}

	/**
	 * Create cocktail form
	 * @param cocktail
	 * Class cocktail
	 */
	createFormCocktail(cocktail: Cocktail = {name: '', image: '', description: '', ingredients: []}): void {
		this.cocktailForm = this.fb.group({
			name: [cocktail.name, [Validators.required, Validators.minLength(4)]],
			image: [cocktail.image, [Validators.required, Validators.minLength(4)]],
			description: [cocktail.description],
			ingredients: this.fb.array(
				cocktail.ingredients.map((ingredient: Ingredient) => this.createIngredient(ingredient))
			)
		});
	}

	createAndUpdateCocktail(): void {
		if (this.editCheck) {
			this.subs.sink = this.cocktailService.createAndUpdateCocktail(this.cocktailForm.value, 2);
		} else {
			this.subs.sink = this.cocktailService.createAndUpdateCocktail(this.cocktailForm.value, 1);
		}
	}

	createIngredient(ingredient: Ingredient): FormGroup {
		return this.fb.group({
			name: [ingredient.name, [Validators.required]],
			quantity: [ingredient.quantity, [Validators.required]]
		});
	}

	/**
	 * Function to add one ingredient
	 */
	addIngredient() {
		this.ingredientForms.push(this.createIngredient(new Ingredient()));
	}

	/**
	 * Delete on ingredient
	 */
	deleteIngredient(i): void {
		this.ingredientForms.removeAt(i);
	}

	private getValueButton() {
		this.activatedRoute.url.subscribe(data => {
			this.namePage = data[data.length - 1].path;
			this.titleButton = (this.namePage === 'new') ? 'Create' : 'Update';
		});
	}
}
