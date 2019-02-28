import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LiderLayoutRoutes } from './lider-layout.routing';

import { HomeLiderComponent } from 'app/lider/home-lider/home-lider.component';
import { PerfilLiderComponent } from 'app/lider/perfil-lider/perfil-lider.component';
import { ProyectoLiderComponent } from 'app/lider/proyecto-lider/proyecto-lider.component';
import { TareasLiderComponent } from 'app/lider/tareas-lider/tareas-lider.component';



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
    RouterModule.forChild(LiderLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    HomeLiderComponent,
    PerfilLiderComponent,
    ProyectoLiderComponent,
    TareasLiderComponent,
  ]
})
export class LiderLayoutModule { }
