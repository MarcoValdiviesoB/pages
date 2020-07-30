import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

   proyectos = [
     "Kross",
     "Uss",
     "Laudus",
     "UC Christus",
     "Clinica Santa María",
     "Residencial"
   ]

   imagenes = {
     "Kross":[

     ],
     "Uss":[

     ],
     "Laudus":[

     ],
     "UC Christus":[

     ],
     "Clinica Santa María":[

     ],
     "Residencial":[

     ]
   }

   selected

   cambiarProyecto = () => {
     let i = this.proyectos.findIndex( proyecto => proyecto == this.selected)
     let newIndex
     if(i == this.proyectos.length - 1){
         newIndex = 0
     }
     newIndex = i + 1
     this.selected = this.proyectos[newIndex]
   }

  constructor() {
    this.selected = this.proyectos[0]
  }

  ngOnInit(): void {
    setInterval( this.cambiarProyecto ,5000)
  }

  select(proyecto){
    this.selected = proyecto
  }

}
