import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/adm/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/adm/menuAdmin', title: ' Menu Administrador',  icon:'bubble_chart', class: '' },
    { path: '/adm/perfilProyecto', title: 'Perfil Proyecto ',  icon:'unarchive', class: '' },
    { path: '/adm/project', title: 'Proyectos',  icon:'content_paste', class: '' },
    { path: '/adm/task', title: 'Tarea',  icon:'library_books', class: '' },
    { path: '/adm/infoProyecto' , title: ' Informacion Proyecto ', icon: 'dashboard', class: ''},
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
