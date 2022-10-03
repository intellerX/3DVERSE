import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './forms/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { SomosComponent } from './forms/somos/somos.component';
import { ColleccionesComponent } from './forms/collecciones/collecciones.component';

import { RouterTestingModule } from '@angular/router/testing';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conocenos', component: SomosComponent },
  { path: 'collecciones', component: ColleccionesComponent },
  

];

@NgModule({
  imports: [RouterTestingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, MatSelectModule, BrowserAnimationsModule]
})
export class AppRoutingModule { }
