import { ActivatedRoute } from '@angular/router'
import { StoreService } from '../store.service'
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  producto;
  counter = 0;

  moveCounter(value){
    this.counter += value
    if(this.counter < 0){
      this.counter = 0;
    }
  }

  changeValue(event){
    this.counter = event.target.value
  }

  constructor(private changeDetection: ChangeDetectorRef, private route:ActivatedRoute, public store:StoreService) {

    //resolve url route
    console.log(route.params.subscribe((params)=>{
      const query = params.query
      if(parseInt(query)){
        const code = query
        this.store.getProductoByCode(code).subscribe((res)=>{
          this.producto = res
        })
      }
      else{
        const nombre = query
        console.log("Searching by name",query)
      }
    }))
    //End resolve url route
  }

  ngOnInit(): void {

  }

  addToCarrito(producto,q){
    this.store.addToCarrito(producto,q);
    producto.enCarrito = true;
    this.changeDetection.detectChanges();
    this.changeDetection.markForCheck();
  }

}
