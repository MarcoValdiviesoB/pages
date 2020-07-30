import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos = [
    {
      titulo : "Recuerdos Nocturnos",
      url: "",
      duracion: "12",
      imagePreview: "https://i.pinimg.com/originals/8f/92/fa/8f92fa142c263dc8d862dcb6010fa30d.jpg",
      resumen: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",

    },
    {
      titulo : "Caminos de Bosque",
      url: "",
      duracion: "12",
      imagePreview: "https://i.pinimg.com/originals/8f/92/fa/8f92fa142c263dc8d862dcb6010fa30d.jpg",
      resumen: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
