import { Routes } from '@angular/router';

import { HomeLiderComponent } from 'app/lider/home-lider/home-lider.component';
import { PerfilLiderComponent } from 'app/lider/perfil-lider/perfil-lider.component';
import { ProyectoLiderComponent } from 'app/lider/proyecto-lider/proyecto-lider.component';
import { TareasLiderComponent } from 'app/lider/tareas-lider/tareas-lider.component';

export const LiderLayoutRoutes: Routes = [
    { path: 'home',            component: HomeLiderComponent },
    { path: 'perfilLider',   component: PerfilLiderComponent },
    { path: 'proyectoLider',     component: ProyectoLiderComponent },
    { path: 'tareasLider',     component: TareasLiderComponent },
    
];
