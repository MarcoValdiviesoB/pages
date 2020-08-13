import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mozaico',
  templateUrl: './mozaico.component.html',
  styleUrls: ['./mozaico.component.scss']
})
export class MozaicoComponent implements OnInit {

  @Input() proyecto

  bgImage(img){
    const bgImg = 'url(/assets/images/'+this.proyecto.nombre+'/'+img+")"
    console.log(bgImg)
    return {"background-image": bgImg }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
