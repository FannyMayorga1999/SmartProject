import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/lider/home', title: 'Home',  icon:'person', class: '' },
    { path: '/lider/perfilLider', title: ' Perfil Lider',  icon:'bubble_chart', class: '' },
    { path: '/lider/proyectoLider', title: 'Proyecto',  icon:'unarchive', class: '' },
    { path: '/lider/tareasLider', title: 'Tareas',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sibebar-lider',
  templateUrl: './sibebar-lider.component.html',
  styleUrls: ['./sibebar-lider.component.scss']
})
export class SibebarLiderComponent implements OnInit {
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
