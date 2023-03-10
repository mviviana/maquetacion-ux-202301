import { Component } from '@angular/core';
import {RouteService} from "../route.service";

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './editar-alarma.component.html',
  styleUrls: ['./editar-alarma.component.scss']
})
export class EditarAlarmaComponent {
	medicamento = true;
	constructor(routeService:RouteService) {
		routeService.title="Editar alarma"
	}
}
