import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  protector = true;

  images = [
    "assets/images/bread-bake.jpg",
    "assets/images/KROOSBAR.jpg",
    "assets/images/foto2.jpg",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
