import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CocktailRoutingModule} from './cocktail-routing.module';
import {CocktailComponent} from './cocktail.component';
import {CocktailDetailsComponent} from './cocktail-details/cocktail-details.component';
import {CocktailEditComponent} from './cocktail-edit/cocktail-edit.component';
import {CocktailsListComponent} from './cocktails-list/cocktails-list.component';
import {SharedModule} from '../../shared';


@NgModule({
	declarations: [
		CocktailComponent,
		CocktailDetailsComponent,
		CocktailEditComponent,
		CocktailsListComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		CocktailRoutingModule
	]
})
export class CocktailModule {
}
