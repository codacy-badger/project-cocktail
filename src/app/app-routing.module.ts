import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Constants} from './core/constants';

const routes: Routes = [
	{
		path: '',
		redirectTo: Constants.COCKTAIL_URL,
		pathMatch: 'full'
	},
	{path: Constants.COCKTAIL_URL, loadChildren: () => import('./components/cocktail/cocktail.module').then(m => m.CocktailModule)},
	{path: Constants.USER_URL, loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)},
	{path: Constants.BASKET_URL, loadChildren: () => import('./components/basket/basket.module').then(m => m.BasketModule)},
	{path: Constants.RECIPE_URL, loadChildren: () => import('./components/recipe/recipe.module').then(m => m.RecipeModule)}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
