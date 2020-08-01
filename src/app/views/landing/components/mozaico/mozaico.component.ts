import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mozaico',
  templateUrl: './mozaico.component.html',
  styleUrls: ['./mozaico.component.scss']
})
export class MozaicoComponent implements OnInit {

  imagenes = [
    { width: 12, src:"1.jpg" },
    { width: 6, src:"2.jpg" },
    { width: 6, src:"4.jpg" },
    { width: 12, src:"3.jpg" },
  ]

  bgImage(img){
    return {"background-image": 'url(/assets/images/Kross/'+img+")" }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
