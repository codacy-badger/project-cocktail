import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiService, CocktailService, UserService} from './services';
import {CocktailModule} from '../components/cocktail/cocktail.module';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		BrowserAnimationsModule,
		CocktailModule
	],
	exports: [
		BrowserAnimationsModule
	],
	providers: [
		ApiService,
		CocktailService,
		UserService
	]
})
export class CoreModule {
}
