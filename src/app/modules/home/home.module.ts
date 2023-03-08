import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatCommonModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    HomeComponent
  ],
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
	  MatSlideToggleModule
  ],
	exports:[HomeComponent]
})
export class HomeModule { }
