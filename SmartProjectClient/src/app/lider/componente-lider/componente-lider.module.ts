
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarLiderComponent } from './navbar-lider/navbar-lider.component';
import { SibebarLiderComponent } from './sibebar-lider/sibebar-lider.component';
import { FooterLiderComponent } from './footer-lider/footer-lider.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavbarLiderComponent,
    SibebarLiderComponent,
    FooterLiderComponent
  ],
  exports: [
    NavbarLiderComponent,
    SibebarLiderComponent,
    FooterLiderComponent
  ]
})
export class ComponenteLiderModule { }
