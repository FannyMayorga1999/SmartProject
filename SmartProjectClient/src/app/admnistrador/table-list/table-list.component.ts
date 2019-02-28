import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../../model/Tarea';
import { ServicesService } from '../../services/services.service'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tarea: Tarea;
  tareas: Array<Tarea>;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.get();
    this.tarea = new Tarea();
  }

  get() {
    this.service.get('people').subscribe(
      response => {
        this.tareas = response as Array<Tarea>;
      },
      error => {
        console.log(error);
      }
    );
  }

  post() {
    this.service.post('people', this.tarea).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }

    );
  }
  put(proyect: Tarea) {
    this.service.put('tareas', this.tarea).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }

    );
  }
  delete(tarea: Tarea) {
    this.service.delete('tareas', this.tarea).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }

    );
  }
}
