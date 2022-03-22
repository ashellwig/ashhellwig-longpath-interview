import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ResidentialMapComponent } from './residential-map/residential-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ResidentialMapComponent } from './residential-map/residential-map.component';
import { CityInfoComponent } from './city-info/city-info.component';

@NgModule({
  declarations: [AppComponent, ResidentialMapComponent, CityInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
