import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../model/Proyecto';
import { ServicesService} from '../../services/services.service'

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.scss']
})
export class InfoProjectComponent implements OnInit {

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

  post(){
    this.service.post('people',this.proyecto).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }
      
    );
  }
  put(proyect:Proyecto){
    this.service.put('proyectos',this.proyecto).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }
      
    );
  }
  delete(proyecto:Proyecto){
    this.service.delete('proyectos',proyecto).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }
      
    );
  }

}
