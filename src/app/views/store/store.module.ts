import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {StoreRoutingModule} from "./store-routing.module"
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreComponent } from './store.component';
import { ProductsListComponent } from './products-list/products-list.component'

@NgModule({
  declarations: [ProductDetailComponent, ProductCardComponent, StoreComponent, ProductsListComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [
  ]
})
export class StoreModule { }
