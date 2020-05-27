import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //credenciales
  correo = '';
  pass = '';
  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Admin', 'Cliete'];
  constructor(
    private readonly _router: Router,
  ) { }

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
      this.sugerencias = ['Admin', 'Cliente'];
    }
    /*this.sugerencias
    = ['hola'];*/
  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }
  info() {
    ['./usuario/usuario.module']
  }
  ingresar() {
    console.log(this.valorAutocomplete);

    if (this.pass === '1234') {
      alert(this.correo);
      if (this.seleccionadoValor === 'Admin') {
        alert('es administrador');
        this._router.navigate(
          ['/administrador', 'perfil']
        )
      }
      if (this.seleccionadoValor === 'Cliente') {
        alert('es cliente');
        this._router.navigate(
          ['/cliente', 'perfil']
        )
      }
    } else {
      alert('no ingreso');
    }
  }
}
