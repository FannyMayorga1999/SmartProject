import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LiderLayoutComponent } from './layouts/lider-layout/lider-layout.component';
import { EquipoLayoutComponent } from './layouts/equipo-layout/equipo-layout.component';
import { RegisterComponent} from 'app/register/register.component';

import { LoginComponent } from './login/login.component';

import { from } from 'rxjs';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'lider',
    pathMatch: 'full',
  }, {
    path: 'adm',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      
  }
]},

{
  path: 'lider',
  component: LiderLayoutComponent,
  children: [
      {
    path: '',
    loadChildren: './layouts/lider-layout/lider-layout.module#LiderLayoutModule'
    
}
]},

{
  path: 'equipo',
  component: EquipoLayoutComponent,
  children: [
      { path: '',
    loadChildren: './layouts/equipo-layout/equipo-layout.module#EquipoLayoutModule'
    
}
]},


{path: 'login',component: LoginComponent},

{path: 'register',component: RegisterComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
