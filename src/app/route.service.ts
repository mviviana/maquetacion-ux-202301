import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class RouteService {

	title: String = "Inicio";

	constructor() {
	}

	setTitle(title: String) {
		this.title = title;
	}


}
