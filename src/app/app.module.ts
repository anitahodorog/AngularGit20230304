import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    KapcsolatComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
