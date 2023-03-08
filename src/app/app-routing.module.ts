import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home/home.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "crear-alarma",
		component: HomeComponent
	},
	{
		path: "crear-medicamento",
		component: HomeComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
