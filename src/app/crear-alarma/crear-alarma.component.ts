import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.scss']
})
export class CrearAlarmaComponent {
	tiles: any[] = [
		{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
		{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
		{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
		{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
	  ];
}
