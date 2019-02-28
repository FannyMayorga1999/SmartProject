import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/equipo/home', title: 'Home', icon: 'person', class: '' },
  { path: '/equipo/perfilEquipo', title: ' Perfil Lider', icon: 'bubble_chart', class: '' },
  { path: '/equipo/proyectoEquipo', title: 'Proyecto', icon: 'unarchive', class: '' },
  { path: '/equipo/tareaEquipo', title: 'Tareas', icon: 'content_paste', class: '' },
];

@Component({
  selector: 'app-sibebar-equipo',
  templateUrl: './sibebar-equipo.component.html',
  styleUrls: ['./sibebar-equipo.component.scss']
})
export class SibebarEquipoComponent implements OnInit {

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
