import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { BackgroundCarouselComponent } from './background-carousel/background-carousel.component';
import { HomeComponent } from './home/home.component';
import { ImageGridLayoutComponent } from './image-grid-layout/image-grid-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotographyComponent } from './photography/photography.component';
import { FetchFilesService } from './services/fetch-files.service';

const appRoutes: Routes = [
  {path: 'photography', component: PhotographyComponent},
  {path: 'art', component: ArtComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    BackgroundCarouselComponent,
    HomeComponent,
    ImageGridLayoutComponent,
    NavbarComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FetchFilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
