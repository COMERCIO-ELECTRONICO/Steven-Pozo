import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  @Input() valorDelPadre: string;
  @Input() valorDelPadre2: string;
  @Output() edad = new EventEmitter
  ngOnInit(): void {


  }
  calcularEdad() {
    this.edad = 2020 - this.valorDelPadre
  }
}
