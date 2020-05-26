import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales

  correo = '';
  pass = '';
  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Steven', 'roots', 'juan'];
  constructor(private readonly _router: Router, ) { }

  ngOnInit(): void { }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['Estudiante', 'Profesor', 'juan'];
    }
    /*this.sugerencias
    = ['hola'];*/
  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }

  ingresar() {
    console.log(this.valorAutocomplete);

    if (this.pass === '1234') {
      alert(this.correo);
      if (this.seleccionadoValor === 'Estudiante') {
        alert('es estudiante');
        this._router.navigate(
          ['/estudiante', 'perfil']
        )
      }
    } if (this.pass === '1234') {
      if (this.seleccionadoValor === 'Profesor') {
        alert('es profesor');
        this._router.navigate(
          ['/profesor', 'perfil']
        )
      }
    } else {
      alert('no ingreso');
    }
  }
}