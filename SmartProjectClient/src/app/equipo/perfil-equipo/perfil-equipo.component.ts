import { Component, OnInit } from '@angular/core';
import { Perfil } from "model/Perfil"
import * as Chartist from 'chartist';
import { ServicesService } from '../../services/services.service'

@Component({
  selector: 'app-perfil-equipo',
  templateUrl: './perfil-equipo.component.html',
  styleUrls: ['./perfil-equipo.component.scss']
})
export class PerfilEquipoComponent implements OnInit {

  constructor(private service: ServicesService) {
  }
  ngOnInit() {
    this.get();
    this.perfil = new Perfil();
  }

  perfil: Perfil;
  perfils: Array<Perfil>;

  get() {
    this.service.get('people').subscribe(
      response => {
        this.perfils = response as Array<Perfil>;
      },
      error => {
        console.log(error);
      }
    );
  }

  post() {
    this.service.post('people', this.perfil).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }

    );
  }
  put(proyect: Perfil) {
    this.service.put('perfils', this.perfil).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }

    );
  }
}
