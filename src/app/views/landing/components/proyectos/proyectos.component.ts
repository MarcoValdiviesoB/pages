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
   ]

     datos = {
     "Kross":{
       nombre: "Kross",
       portada:"1.jpg",
       imagenes:[
         { width:12, src:"1.jpg" },
         { width: 6, src:"2.jpg" },
         { width: 6, src:"4.jpg" },
       ]
     },
     "Uss":{
       nombre: "Uss",
       portada:"1.jpg",
       imagenes:[
         { width:12, src:"1.jpg" },
         { width: 6, src:"2.jpg" },
         { width: 6, src:"3.jpg" },
       ]
     },
     "Laudus":{
       nombre: "Laudus",
       portada:"1.jpg",
       imagenes:[
         { width:12, src:"1.jpg" },
         { width: 6, src:"2.jpg" },
         { width: 6, src:"3.jpg" },
       ]
     },
     "UC Christus":{
       nombre: "UC_Christus",
       portada:"1.jpg",
       imagenes:[
         { width:12, src:"1.jpg" },
         { width: 6, src:"2.jpg" },
         { width: 6, src:"3.jpg" },
       ]
     },
     "Clinica Santa María":{
       nombre: "Clinica_Santa_María",
       portada:"1.jpg",
       imagenes:[
         { width:12, src:"1.jpg" },
         { width: 6, src:"2.jpg" },
         { width: 6, src:"3.jpg" },
       ]
     },
   }

   selected

   getBg(){
     return {"background-image":"url('/assets/images/" + this.datos[this.selected].nombre + "/" + this.datos[this.selected].portada + "'"}
   }

   timer = 0;
   fixed = false
   cambiarProyecto = () => {
     this.timer += 2
     if( this.fixed || this.timer%6 )return
     let i = this.proyectos.findIndex( proyecto => proyecto == this.selected)
     let newIndex
     if(i == this.proyectos.length - 1){
         newIndex = 0
     }
     newIndex = i + 1
     this.selected = this.proyectos[newIndex]
     this.timer = 0;
   }

  constructor() {
    this.selected = this.proyectos[0]
  }

  ngOnInit(): void {
    setInterval( this.cambiarProyecto ,2000)
  }

  select(proyecto){
    this.selected = proyecto
  }
  selectProyecto(){
    const selected = this.selected;
    this.fixed = true;
    document.getElementById("visor").scrollLeft = document.getElementById("container").clientWidth
  }
  volver(){
    document.getElementById("visor").scrollLeft = 0;
  }
}
