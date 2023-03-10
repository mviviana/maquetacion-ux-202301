import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { CrearAlarmaComponent } from './crear-alarma/crear-alarma.component';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import {EditarAlarmaComponent} from "./editar-alarma/editar-alarma.component";

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
		path: "editar-alarma",
		component: EditarAlarmaComponent
	},
	{
		path: "crear-medicamento",
		component: CrearMedicamentoComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
