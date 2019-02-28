import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../model/Proyecto';
import { ServicesService} from '../../services/services.service'

@Component({
  selector: 'app-proyecto-equipo',
  templateUrl: './proyecto-equipo.component.html',
  styleUrls: ['./proyecto-equipo.component.scss']
})
export class ProyectoEquipoComponent implements OnInit {

  constructor(private service: ServicesService) { }
  ngOnInit() {
    this.get();
    this.proyecto = new Proyecto();
  }

  proyecto : Proyecto;
  proyectos : Array<Proyecto>;

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
