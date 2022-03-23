import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityInfoComponent } from './city-info/city-info.component';
import { ResidentialMapComponent } from './residential-map/residential-map.component';

const routes: Routes = [
  {
    path: '',
    component: ResidentialMapComponent,
  },
  {
    path: 'city/:cityName',
    component: CityInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
