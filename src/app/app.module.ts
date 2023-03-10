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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HomeModule } from './modules/home/home.module';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, CrearAlarmaComponent, CrearMedicamentoComponent],
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
		HomeModule,
		MatCardModule,
		MatCheckboxModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatInputModule,
		MatGridListModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
