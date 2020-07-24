import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-intro-nine',
  templateUrl: './intro-nine.component.html',
  styleUrls: ['./intro-nine.component.scss'],
  animations:[SharedAnimations]
})
export class IntroNineComponent implements OnInit {

  images = [
    "assets/images/laudus2.png",
    "assets/images/KROOSBAR.jpg",
    "assets/images/foto2.jpg",
  ]

  constructor() { }

  ngOnInit() {
  }

}
