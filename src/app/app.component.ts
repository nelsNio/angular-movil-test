import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movil-test';
  nombre = '';
  edad = 23;
  email = 'nelson.nino@uptc.edu.co';
  sitio_web='andresnino.tech';
  sueldos = [1700, 1600, 1900];
  activo = true;
  apellido='';

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }

}
