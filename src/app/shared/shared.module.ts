import { LandingLayoutComponent } from './components/layouts/landing-layout/landing-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './components/header/header.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { WINDOW_PROVIDERS } from '../views/landing/helpers/window.helpers';



import { ScrollToDirective } from './directives/scroll-to.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreLayoutComponent } from './components/layouts/store-layout/store-layout.component'
import { StoreToolbarComponent } from './components/layouts/store-layout/store-toolbar/store-toolbar.component'
import { CarritoComponent } from './components/layouts/store-layout/carrito/carrito.component'
import { StoreService } from 'src/app/views/store/store.service'

const exportedClasses = [
  AuthLayoutComponent,
  CarritoComponent,
  HeaderComponent,

  ScrollToDirective,

  LandingLayoutComponent,
  StoreLayoutComponent,
  StoreToolbarComponent
];


@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  providers: [WINDOW_PROVIDERS],
  declarations: exportedClasses,
  exports: exportedClasses
})
export class SharedModule {}
