import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CrearAlarmaComponent } from './crear-alarma/crear-alarma.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import { DialogComponent } from './dialog/dialog.component';
import {HomeComponent} from "./home/home.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDialogModule} from "@angular/material/dialog";
import {RouteService} from "./route.service";
import {EditarAlarmaComponent} from "./editar-alarma/editar-alarma.component";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [AppComponent, CrearAlarmaComponent, CrearMedicamentoComponent, DialogComponent,HomeComponent,EditarAlarmaComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatIconModule,
		MatDividerModule,
		MatCommonModule,
		MatButtonModule,
		MatToolbarModule,
		MatListModule,
		MatCardModule,
		MatCheckboxModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatInputModule,
		MatGridListModule,
		FormsModule,
		MatSlideToggleModule,
		MatDialogModule,
		MatDatepickerModule,
		ReactiveFormsModule
	],
	providers: [MatDialogModule,RouteService],
	bootstrap: [AppComponent],
})
export class AppModule {}
