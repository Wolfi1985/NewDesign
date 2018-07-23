import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './menu/sidebarMenu/sidebar.component';
import { ImageSliderComponent } from './imageSlider/image-slider.component';

// services
import { AppService } from './app.service';
import { SidebarService } from './menu/sidebarMenu/sidebar.service';
import { ImageSLiderService } from './imageSlider/image-slider.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppService,
    SidebarService,
    ImageSLiderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
