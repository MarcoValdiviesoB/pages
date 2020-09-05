import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StoreService } from 'src/app/views/store/store.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private changeDetection: ChangeDetectorRef, public store:StoreService ) {
  }


  pagar(){
    console.log(this.store.carrito)
  }

  ngOnInit(): void {
    console.log(this.store.carrito)
  }

}
