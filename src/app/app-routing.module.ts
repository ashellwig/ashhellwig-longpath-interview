import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityInfoComponent } from './city-info/city-info.component';

const routes: Routes = [
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
