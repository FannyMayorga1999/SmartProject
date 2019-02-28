import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { NavbarEquipoComponent } from './navbar-equipo/navbar-equipo.component';
import { SibebarEquipoComponent } from './sibebar-equipo/sibebar-equipo.component';
import { FooterEquipoComponent } from './footer-equipo/footer-equipo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavbarEquipoComponent,
    SibebarEquipoComponent,
    FooterEquipoComponent
  ],
  exports: [
    NavbarEquipoComponent,
    SibebarEquipoComponent,
    FooterEquipoComponent
  ]
})
export class ComponenteEquipoModule { }
