import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  textos = [
      { texto:"Somos un grupo de realizadores buscando nuevas formas de hacer películas" , anclaje: 'titulo-home'}
  ]

  metrajes = {
    "en" : {
    "Caminos de Bosque" : {
      nombre: "Forest Paths",
      descripcion: "Yvo, Demian and Rosa, childhood friends, lose their way in the dark when they decide to go out searching for Gabriel. As they move forward, the need to go back becomes inevitable.",
      images : [
        "film2/1.jpeg",
        "film2/2.jpeg",
        "film2/3.jpeg",
        "film2/4.jpeg",
        "film2/5.jpeg",
      ],
      portada : "film1/portada.jpeg",
      duracion : "",
      anno: "2020",
      ficha: {
        "Cast": [
          "Demian Cosmos Sánchez Hernández",
          "Rosa García-Huiodobro Castillo",
          "Yvo Saintard Wegener"
        ],
        "Written and directed by" : "Ariel Velasco González",
        "Production" : "Tomás Plana Somerville",
        "Art director" : "Norkys Rojas Contreras",
        "Cinematography" : "Antonio Ananias Botta",
        "Assistant director / Editor" : "Martín Velasco González",
        "Post Production" : "Christoffer Baeza Jiménez ",
      }
    },
    "Recuerdos Nocturnos" : {
      nombre: "Night Memories",
      descripcion: "A transit through four situations with no apparent connection to each other. In each story, silence, sex, travel or even life is interrupted. ",
      duracion : "08 min.",
      portada : "film2/portada.jpg",
      anno: "2020",
      images:[
        "film1/1.jpg",
        "film1/2.jpg",
        "film1/3.jpg",
        "film1/4.jpg",
      ],
      ficha: {
        "Cast": [
          "Belén Herrera Riquelme",
          "Daniel Antivilo",
          "Millaray Toriello Viereck",
          "Carlos Nemesio González",
          "Sebastián Ayala Alveal",
          "Gonzalo Bustos Lillo",
          "Diego González Rodríguez",
        ],
        "Written and directed by" : "Ariel Velasco González",
        "Production" : "Tomás Plana Somerville",
        "Art director" : "Sofia Nuñez Rillón",
        "Cinematography" : "Antonio Ananias Botta",
        "Assistant director" : "Pablo Fergnani Sepulveda",
        "Editor" : "Rocio Ortega Armijo",
        "Sound designer" : "Julián Bravo González",
        "Color grading" : "Guid Goñi",
      }
    }
  },
  "es" : {
    "Caminos de Bosque" : {
      nombre: "Caminos de Bosque",
      descripcion: "Yvo, Demian y Rosa, amigos de infancia, pierden el rumbo en la oscuridad cuando deciden salir en búsqueda de Gabriel. A medida que avanzan, la necesidad de volver hacia atrás se hace inevitable.",
      images : [
        "film2/1.jpeg",
        "film2/2.jpeg",
        "film2/3.jpeg",
        "film2/4.jpeg",
        "film2/5.jpeg",
      ],
      portada : "film1/portada.jpeg",
      duracion : "",
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
        "Post Producción" : "Christoffer Baeza Jiménez ",
      }
    },
    "Recuerdos Nocturnos" : {
      nombre: "Recuerdos Nocturnos",
      descripcion: "Un tránsito a través de cuatro situaciones sin conexión aparente entre sí. En cada historia se ve interrumpido el silencio, el sexo, el viaje o incluso la vida.",
      duracion : "08 mins.",
      portada : "film2/portada.jpg",
      anno: "2020",
      images:[
        "film1/1.jpg",
        "film1/2.jpg",
        "film1/3.jpg",
        "film1/4.jpg",
      ],
      ficha: {
        "Casting": [
          "Belén Herrera Riquelme",
          "Daniel Antivilo",
          "Millaray Toriello Viereck",
          "Carlos González Rodríguez",
          "Sebastián Ayala Alveal",
          "Gonzalo Bustos Lillo",
          "Diego González Rodríguez",
        ],
        "Guión y dirección" : "Ariel Velasco González",
        "Producción" : "Tomás Plana Somerville",
        "Dirección de arte" : "Sofia Nuñez Rillón",
        "Dirección de fotografía" : "Antonio Ananias Botta",
        "Asistencia de dirección" : "Pablo Fergnani Sepulveda",
        "Diseño de sonido" : "Julián Bravo González",
        "Montaje" : "Rocio Ortega Armijo",
        "Post color" : "Guido Goñi",
      }
    }
  }
}

  idioma = "es"

  constructor() { }
}
