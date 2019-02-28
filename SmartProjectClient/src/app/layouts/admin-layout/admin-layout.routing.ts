import { Routes } from '@angular/router';

import { DashboardComponent } from 'app/admnistrador/dashboard/dashboard.component';
import { UserProfileComponent } from 'app/admnistrador/user-profile/user-profile.component';
import { TableListComponent } from 'app/admnistrador/table-list/table-list.component';
import { ProjectComponent } from 'app/admnistrador/project/project.component';
import { TaskComponent } from 'app/admnistrador/task/task.component';
import { PerfilProyectoComponent } from 'app/admnistrador/perfil-proyecto/perfil-proyecto.component';
import { MenuAdminComponent } from 'app/admnistrador/menu-admin/menu-admin.component';
import { InfoProjectComponent } from 'app/admnistrador/info-project/info-project.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',            component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'project',     component: ProjectComponent },
    { path: 'task',          component: TaskComponent },
    { path:'perfilProyecto' , component:PerfilProyectoComponent },
    { path: 'menuAdmin' , component : MenuAdminComponent},
    { path:'infoProyecto' , component:InfoProjectComponent },
    
];
