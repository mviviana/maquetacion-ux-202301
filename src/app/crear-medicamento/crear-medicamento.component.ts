import { Component } from '@angular/core';
import {RouteService} from "../route.service";

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.scss']
})
export class CrearMedicamentoComponent {
constructor(routeService:RouteService) {
	routeService.title="Crear medicamento"
}
}
