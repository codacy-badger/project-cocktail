import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BasketComponent} from './basket.component';
import {Constants} from '../../core/constants';

const routes: Routes = [{path: Constants.BASKET_URL, component: BasketComponent}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BasketRoutingModule {
}
