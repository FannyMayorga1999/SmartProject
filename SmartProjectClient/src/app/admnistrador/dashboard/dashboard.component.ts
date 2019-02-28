import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Proyecto } from '../../../model/Proyecto';
import { ServicesService} from '../../services/services.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
