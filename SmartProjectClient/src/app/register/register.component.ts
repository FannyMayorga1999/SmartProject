import { Router } from '@angular/router';
import { ServicesService } from './../services/services.service';
import { Component, OnInit } from '@angular/core';
//import swal from 'sweetalert';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: String = '';
  email: String = '';
  //busy: Promise<any>;
  esperando: Boolean;

  constructor() {}

  ngOnInit() {
  
  }

  /*registrar() {
    if ( !this.esperando ) {
      this.esperando = true;
      this.busy = this.authDataServise.register(this.name, this.email).then( r => {
        this.esperando = false;
        swal({
          title: 'Te damos la bienvenida',
          text: 'Enviamos tu contraseña a tu correo',
          icon: 'success',
        })
        .then( response => {
          this.name = '';
          this.email = '';
          this.router.navigate(['/login']);
        });
      }).catch( e => {
        this.esperando = false;
        console.log(e);
      });
    }
  }*/
}
