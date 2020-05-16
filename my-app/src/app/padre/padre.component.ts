import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }
  valorDelInput = string;
  años = number;
  edad: number;



  ngOnInit(): void {
  }
  respuestaHijo(evento) {
    this.edad = evento
    console.log(evento)
  }
