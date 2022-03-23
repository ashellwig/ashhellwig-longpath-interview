import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import cities from '../cities.json';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.sass'],
})
export class CityInfoComponent implements OnInit {
  currentCity: string;
  cityList: {
    cityName: String;
    stateName: String;
    population: String;
    timeZone: any;
    zipCodes: any;
    fipsCode: String;
    majorAirport: String;
  }[] = cities;
  cityInfo: any = [];
  selectedCity: any = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentCity = activatedRoute.snapshot.url[1].path;

    this.selectedCity = this.cityList.filter((city) => {
      return (
        city.cityName ==
        this.currentCity.charAt(0).toUpperCase() + this.currentCity.slice(1)
      );
    });
  }

  ngOnInit(): void {}
}
