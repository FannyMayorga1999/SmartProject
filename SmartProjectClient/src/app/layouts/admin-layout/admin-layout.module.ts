import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from 'app/admnistrador/dashboard/dashboard.component';
import { UserProfileComponent } from 'app/admnistrador/user-profile/user-profile.component';
import { TableListComponent } from 'app/admnistrador/table-list/table-list.component';
import { MenuAdminComponent } from 'app/admnistrador/menu-admin/menu-admin.component';
import { ProjectComponent } from 'app/admnistrador/project/project.component';
import { TaskComponent } from 'app/admnistrador/task/task.component';
import { PerfilProyectoComponent } from 'app/admnistrador/perfil-proyecto/perfil-proyecto.component';
import { InfoProjectComponent } from 'app/admnistrador/info-project/info-project.component';


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
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    MenuAdminComponent,
    MenuAdminComponent,
    ProjectComponent, 
    TaskComponent,
    PerfilProyectoComponent,
    InfoProjectComponent 
  ]
})

export class AdminLayoutModule {}
