import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  productos

  //layoutToggle

  toggled = 'toolbar';


  //endLayoutToggle

  //carrito
  total = 2000;
  carrito = {}
  carritoKeys = []
  //endCarrito

  toggle(option){
    this.toggled = option
  }

  getProductoByCode(code){
    return this.http.get('https://s8h6evws51.execute-api.us-east-1.amazonaws.com/first?code='+code)
  }

  getAllProductos(){
    return this.http.get('https://s8h6evws51.execute-api.us-east-1.amazonaws.com/first?code=*');
  }

  addToCarrito(producto,q = 0){
    this.carrito[producto.code] = {producto:producto , cantidad:q}
    this.carritoKeys = Object.keys(this.carrito)
  }


  deleteFromCarrito(id){
    delete this.carrito[id]
  }

  updateProductos(){
    this.getAllProductos().subscribe((res)=>{
      this.productos = res
      console.log(this.productos)
    })
  }

  constructor(private http:HttpClient) {
    this.carrito = []
    this.updateProductos()
  }
}
