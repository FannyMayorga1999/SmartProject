import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../model/Proyecto';
import { ServicesService} from '../../services/services.service'

@Component({
  selector: 'app-perfil-proyecto',
  templateUrl: './perfil-proyecto.component.html',
  styleUrls: ['./perfil-proyecto.component.scss']
})
export class PerfilProyectoComponent implements OnInit {

  proyecto : Proyecto;
  proyectos : Array<Proyecto>;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.get();
    this.proyecto = new Proyecto();
  }

  get() {
    this.service.get('people').subscribe(
      response => {
        this.proyectos = response as Array<Proyecto>;
      },
      error => {
        console.log(error);
      }
    );
  } 
}
