import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home/home.component";
import { CrearAlarmaComponent } from './crear-alarma/crear-alarma.component';

const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch:"full"
	},
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "crear-alarma",
		component: CrearAlarmaComponent
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
