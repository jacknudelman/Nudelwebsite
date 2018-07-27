import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundCarouselComponent } from './background-carousel/background-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
