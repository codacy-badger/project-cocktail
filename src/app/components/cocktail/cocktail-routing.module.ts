import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CocktailComponent} from './cocktail.component';
import {CocktailEditComponent} from './cocktail-edit/cocktail-edit.component';
import {CocktailDetailsComponent} from './cocktail-details/cocktail-details.component';
import {Constants} from '../../core/constants';

const routes: Routes = [
	{
		path: Constants.COCKTAIL_URL, component: CocktailComponent,
		children: [
			{path: 'new', component: CocktailEditComponent},
			{path: ':index/edit', component: CocktailEditComponent},
			{path: ':index', component: CocktailDetailsComponent},
			{path: '', component: CocktailDetailsComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CocktailRoutingModule {
}
