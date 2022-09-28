import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexModule } from './index/index.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './forms/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './forms/login/login.component';
import { AdminComponent } from './forms/admin/admin.component';
import { InscripcionesComponent } from './forms/inscripciones/inscripciones.component';
import { ConsultavigenciaComponent } from './forms/consultavigencia/consultavigencia.component';
import { SomosComponent } from './forms/somos/somos.component';
import { AnimationComponent } from './components/animation/animation.component';
import { BannerComponent } from './components/banner/banner.component';
import { FixedButtonsComponent } from './components/fixed-buttons/fixed-buttons.component';
import { ConfigTableComponent } from './index/config-table/config-table.component';
import { PersonalTableComponent } from './index/personal-table/personal-table.component';
import { MainComponent } from './index/main/main.component';
import { VerformacionnitComponent } from './forms/verformacionnit/verformacionnit.component';
import { AndamiosComponent } from './forms/courses/andamios/andamios.component';
import { RescateComponent } from './forms/courses/rescate/rescate.component';
import { AgoraComponent } from './forms/info/agora/agora.component';
import { SstComponent } from './forms/info/sst/sst.component';
import { BuySuccesComponent } from './forms/courses/buy-succes/buy-succes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    InscripcionesComponent,
    ConsultavigenciaComponent,
    SomosComponent,
    AnimationComponent,
    BannerComponent,
    FixedButtonsComponent,
    VerformacionnitComponent,
    AndamiosComponent,
    RescateComponent,
    AgoraComponent,
    SstComponent,
    BuySuccesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
