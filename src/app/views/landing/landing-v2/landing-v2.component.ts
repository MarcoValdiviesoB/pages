import {Component, OnInit} from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: "app-landing-v2",
  templateUrl: "./landing-v2.component.html",
  styleUrls: ["./landing-v2.component.scss"],
  animations: [
    trigger('fadeSlideInOut', [
    	transition(':enter', [
    		style({ opacity: 0, transform: 'translateY(10px)' }),
    		animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
    	]),
    	transition(':leave', [
    		animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
    	]),
    ]),
    trigger('SlideLeftInOut', [
    	transition(':enter', [
    		style({ opacity: 0, transform: 'translateX(-200px)' }),
    		animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
    	]),
    	transition(':leave', [
    		animate('500ms', style({ opacity: 0, transform: 'translateX(10px)' })),
    	]),
    ]),
    trigger('SlideRightInOut', [
      transition(':enter', [
        style({ opacity: 0.5, transform: 'translateX(200px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateX(10px)' })),
      ]),
    ]),
  ]
})
export class LandingV2Component implements OnInit {
  backgroundColor = "landing-indigo-light";
  showCustomizer = false;
  show;

  scrolled(n){
    const scrolled = window.pageYOffset
    return n <= scrolled
  }

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.show = true
    }, 500);
  }

  changeBg(colorName) {
    this.backgroundColor = "landing-" + colorName;
  }
  toggleCustomizer() {
    this.showCustomizer = !this.showCustomizer;
  }
}
