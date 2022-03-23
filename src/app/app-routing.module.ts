import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityInfoComponent } from './city-info/city-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
