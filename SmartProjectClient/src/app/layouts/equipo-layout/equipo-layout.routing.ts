import { Routes } from '@angular/router';

import { ProyectoEquipoComponent } from 'app/equipo/proyecto-equipo/proyecto-equipo.component';
import { PerfilEquipoComponent } from 'app/equipo/perfil-equipo/perfil-equipo.component';
import { TareaEquipoComponent } from 'app/equipo/tarea-equipo/tarea-equipo.component';
import { HomeEquipoComponent } from 'app/equipo/home-equipo/home-equipo.component';


export const EquipoLayoutRoutes: Routes = [
    { path: 'home',            component: HomeEquipoComponent },
    { path: 'perfilEquipo',   component: PerfilEquipoComponent },
    { path: 'proyectoEquipo',     component: ProyectoEquipoComponent },
    { path: 'tareaEquipo',     component: TareaEquipoComponent },
    
];
