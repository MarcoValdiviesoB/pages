import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works1',
  templateUrl: './works1.component.html',
  styleUrls: ['./works1.component.scss']
})
export class Works1Component implements OnInit {

  works = [
    { src:"https://almut.cl" , texto: ""},
    { src:"https://bosquenaturapucon.cl" , texto: ""},
    { src:"https://carecaca.club" , texto: ""}

  ]

  constructor() {
    document.addEventListener("wheel", function (e) {
      const xPoint = e.clientX
      const yPoint = e.clientY
      const iframe = document.getElementById("wrapper")
      const rect = iframe.getBoundingClientRect();


      if(xPoint > rect.left && yPoint < rect.bottom && xPoint < rect.right && yPoint > rect.top){
        console.log("scrolling", e.deltaY)
      }
    })
  }

  ngOnInit() {
  }

  scrollIframe(event){
    console.log(event, document.getElementById("content"))
  }

}
