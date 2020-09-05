import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/views/store/store.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-store-layout',
  templateUrl: './store-layout.component.html',
  styleUrls: ['./store-layout.component.scss']
})
export class StoreLayoutComponent implements OnInit {

  breadcrumb = [
    "pedidos", "wa"
  ]

  getOptionStyle(option){
    if(this.store.toggled == option){
      return {
        "background" : "blue"
      }
    }
    else{
      return {
        "background" : "black"
      }
    }
  }

  constructor( public route:ActivatedRoute, public store:StoreService) {
    console.log("yum",route)
  }

  ngOnInit(): void {
  }

}
