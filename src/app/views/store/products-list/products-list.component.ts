import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productos = [

    { nombre:"prod1", img: "img1", valor: 1000 },
    { nombre:"prod2", img: "img2", valor: 1000 },
    { nombre:"prod3", img: "img3", valor: 1000 },
    { nombre:"prod4", img: "img4", valor: 1000 }

  ]

  constructor( public store:StoreService ) { }

  ngOnInit(): void {
  }

}
