import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { PendienteComponent } from './pendiente/pendiente.component';
import { EnConstruccionComponent } from './en-construccion/en-construccion.component';

@NgModule({
  declarations: [AppComponent, PendienteComponent, EnConstruccionComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
