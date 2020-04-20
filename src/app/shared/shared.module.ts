import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ActiveColorDirective} from './directives';
import {ButtonsComponent} from './buttons';


@NgModule({
	declarations: [
		ButtonsComponent,
		ActiveColorDirective
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		ActiveColorDirective
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule
	]
})
export class SharedModule {
}