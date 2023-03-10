import { Component } from '@angular/core';
import {RouteService} from "./route.service";
export interface Section {
	name: string;
	updated: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:String = 'app-web';
constructor(public routeService:RouteService) {
	this.title=routeService.title;
}
}
