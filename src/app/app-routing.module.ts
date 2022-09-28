import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './forms/home/home.component';
import { LoginComponent } from './forms/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './forms/admin/admin.component';
import { InscripcionesComponent } from './forms/inscripciones/inscripciones.component';
import { ConsultavigenciaComponent } from './forms/consultavigencia/consultavigencia.component';
import { MatSelectModule } from '@angular/material/select';
import { SomosComponent } from './forms/somos/somos.component';
import { VerformacionnitComponent } from './forms/verformacionnit/verformacionnit.component'

import { MainComponent } from './index/main/main.component'

import { PersonalTableComponent } from './index/personal-table/personal-table.component';
import { ConfigTableComponent } from './index/config-table/config-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormacionesTableComponent } from './index/formaciones-table/formaciones-table.component'
import { MisFormacionesTableComponent } from './index/mis-formaciones-table/mis-formaciones-table.component'
import { EmpresasTableComponent } from './index/empresas-table/empresas-table.component';
import { InstructoresTableComponent } from './index/instructores-table/instructores-table.component';
import { AndamiosComponent } from './forms/courses/andamios/andamios.component';
import { RescateComponent } from './forms/courses/rescate/rescate.component';

import { AgoraComponent } from './forms/info/agora/agora.component';
import { SstComponent } from './forms/info/sst/sst.component';
import { BuySuccesComponent } from './forms/courses/buy-succes/buy-succes.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'consulta', component: ConsultavigenciaComponent },
  { path: 'conocenos', component: SomosComponent },
  { path: 'consultas', component: VerformacionnitComponent },
  { path: 'info_andamios', component: AndamiosComponent },
  { path: 'info_rescate', component: RescateComponent },
  { path: 'info_agora', component: AgoraComponent },
  { path: 'info_sst', component: SstComponent },
  { path: 'course_find/:id', component: BuySuccesComponent },
  {
    path: "main", component: MainComponent, children: [
      { path: "personal", component: PersonalTableComponent },
      { path: "config", component: ConfigTableComponent },
      { path: "formaciones", component: FormacionesTableComponent },
      { path: "mis_formaciones", component: MisFormacionesTableComponent },
      { path: "empresas", component: EmpresasTableComponent },
      { path: "instructores", component: InstructoresTableComponent },

    ]
  },

];

@NgModule({
  imports: [RouterTestingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, MatSelectModule, BrowserAnimationsModule]
})
export class AppRoutingModule { }
