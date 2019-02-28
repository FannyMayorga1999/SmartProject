import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from 'app/admnistrador/components/components.module';
import {ComponenteLiderModule} from 'app/lider/componente-lider/componente-lider.module'
import {ComponenteEquipoModule} from 'app/equipo/componente-equipo/componente-equipo.module'
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import {RegisterComponent} from 'app/register/register.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LiderLayoutComponent } from './layouts/lider-layout/lider-layout.component';
import { EquipoLayoutComponent } from './layouts/equipo-layout/equipo-layout.component';
import { from } from 'rxjs';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    ComponenteLiderModule,
    ComponenteEquipoModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LiderLayoutComponent,
    EquipoLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
