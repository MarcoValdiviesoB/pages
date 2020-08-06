import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DatabaseService } from '../../services/database.service'

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  peliculas = {
    "es" : {
      "Caminos de Bosque" : {
        nombre: "Caminos de Bosque",
        descripcion: "Yvo, Demian y Rosa, amigos de infancia, pierden el rumbo en la oscuridad cuando deciden salir en búsqueda de Gabriel. A medida que avanzan, la necesidad de volver hacia atrás se hace inevitable.",
        duracion : 61,
        anno: "2020",
        ficha: {
          "Casting": [
            "Demian Cosmos Sánchez Hernández",
            "Rosa García-Huiodobro Castillo",
            "Yvo Saintard Wegener"
          ],
          "Guión y dirección" : "Ariel Velasco González",
          "Producción" : "Tomás Plana Somerville",
          "Dirección de arte" : "Norkys Rojas Contreras",
          "Dirección de fotografía" : "Antonio Ananias Botta",
          "Asistencia de dirección y Montaje" : "Martín Velasco González",
          "Post Producción" : "Christoffer Baeza Jiménez "
        }
      }
    }
  }

  pelicula
  datos
  idioma = "es"
  currentImg = ""
  imgIndex = 0

  isArray(input){
    if(typeof input == 'object' && typeof input.length == 'number'){
      return true
    }
    return false
  }



  constructor(private db:DatabaseService, private router:Router, private route:ActivatedRoute) {
  }

  siguienteImagen(){
    if(this.imgIndex < this.pelicula.images.length){
      this.imgIndex = 0
    }
    else{
      this.imgIndex += 1
    }
    this.currentImg = this.pelicula.images[this.imgIndex]
  }

  passImage(q){
    this.imgIndex += q
    if(this.imgIndex < 0){
      this.imgIndex = this.pelicula.images.length - 1
    }
    else if(this.imgIndex >= this.pelicula.images.length){
      this.imgIndex = 0;
    }
    this.currentImg = this.pelicula.images[this.imgIndex]
  }

  ngOnInit(): void {
    const peli = this.route.snapshot.params['pelicula']
    if(this.db.metrajes[this.db.idioma][peli]){
      this.pelicula = this.db.metrajes[this.db.idioma][peli]
      this.datos = Object.keys(this.pelicula.ficha)
      this.currentImg = this.pelicula.images[this.imgIndex]
    }
    else{
      this.router.navigateByUrl("#/landing/demos")
    }
  }

}
