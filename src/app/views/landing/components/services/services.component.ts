import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = [
    {nombre:"Software" , img : "https://ionicframework.com/img/homepage/components-1x.png"},
    {nombre:"Aplicacion Movil", img : "https://ionicframework.com/img/homepage/run-anywhere-1x.png"},
    {nombre:"Pagina Web" , img:"https://ionicframework.com/img/homepage/tooling-1x.png"}

  ]

  constructor() { }

  ngOnInit() {
  }

}
