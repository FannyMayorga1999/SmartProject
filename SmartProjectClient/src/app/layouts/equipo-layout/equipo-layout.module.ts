import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipoLayoutRoutes } from './equipo-layout.routing';

import { ProyectoEquipoComponent } from 'app/equipo/proyecto-equipo/proyecto-equipo.component';
import { PerfilEquipoComponent } from 'app/equipo/perfil-equipo/perfil-equipo.component';
import { TareaEquipoComponent } from 'app/equipo/tarea-equipo/tarea-equipo.component';
import { HomeEquipoComponent } from 'app/equipo/home-equipo/home-equipo.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EquipoLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
        
    ProyectoEquipoComponent,
    PerfilEquipoComponent,
    TareaEquipoComponent,
    HomeEquipoComponent,
  ]
})
export class EquipoLayoutModule { }
