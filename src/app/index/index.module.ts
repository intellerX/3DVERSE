import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PersonalTableComponent } from './personal-table/personal-table.component';
import { ConfigTableComponent } from './config-table/config-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormacionesTableComponent } from './formaciones-table/formaciones-table.component';
import { InstructoresTableComponent } from './instructores-table/instructores-table.component';
import { EmpresasTableComponent } from './empresas-table/empresas-table.component';
import { MisFormacionesTableComponent } from './mis-formaciones-table/mis-formaciones-table.component';



@NgModule({
  declarations: [
    MainComponent,
    PersonalTableComponent,
    ConfigTableComponent,
    FormacionesTableComponent,
    InstructoresTableComponent,
    EmpresasTableComponent,
    MisFormacionesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class IndexModule { }
