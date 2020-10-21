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
       ],
       obras: [
         "Diseño y habilitación de Baños Tap Room / Demolición existentes y Obras civiles nuevos Baños",
         "Diseño interiorismo / Fabricación e instalación de Barra Cubierta Acero Inox  y recubrimientos por Marca / Recubrimientos Muros Planchas Oxidadas / Fabricación e instalación de Lámparas y alumbrado general / Pintura General",
         "Corta vista exterior / separador área fabricación",
         "Mobiliarios externos Terraza / Mesas / Sillas / Pérgola madera sobre estructura metálica / Maceteros plantas",
         "Mobiliarios Oficinas y salas de reuniones / Bodegas / Cuartos fríos",
         "Instalaciones eléctricas en General",
         "Mobiliarios Kitchenette y Casino empleados completo",
         "Portones eléctricos para estacionamientos"
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
       ],
       obras: [
         "Obras civiles / Demolición e implementación de Oficinas / Diseño y Remodelación de planta completa",
         "Diseño y fabricación de Mobiliarios",
         "Diseño e instalación de Gráficas y mamparas de cristal",
         "Diseño e instalación de Salas de reuniones / Interiorismo y Mobiliarios"
       ]
     },
     "UC Christus":{
       nombre: "UC_Christus",
       portada:"1.jpg",
       imagenes:[
         { width:12, src:"1.jpg" },
         { width: 6, src:"2.jpg" },
         { width: 6, src:"3.jpg" },
       ],
       obras: [
         "Diseño y Fabricación Lockers personal trabajo",
         "Diseño y Fabricación Mueble recepción acceso Sur",
         "Mueble recarga dispositivos electrónicos",
         "Kitchenette"
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
