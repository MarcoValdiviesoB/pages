import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etapas',
  templateUrl: './etapas.component.html',
  styleUrls: ['./etapas.component.scss']
})
export class EtapasComponent implements OnInit {

  etapas = [
    "Asesoria",
    "Diseño",
    "Fabricación",
    "Instalación",
  ]

  getPosition(i){
    const n = this.etapas.length
    let pos = 95/(n-1) * i;
    return { "left" : pos + "%"}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
