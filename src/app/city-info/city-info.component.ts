import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.sass'],
})
export class CityInfoComponent implements OnInit {
  currentCity: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('===============');
    console.log('Routes:');
    console.log('---------------');
    console.log('Array of States:');
    console.log('---------------');
    console.log(activatedRoute.snapshot.url);
    console.log('---------------');
    console.log('Path:');
    console.log(activatedRoute.snapshot.url[1].path);
    console.log('---------------');
    console.log('===============');

    this.currentCity = activatedRoute.snapshot.url[1].path;
    console.log('Set current city to: ' + this.currentCity);
  }

  ngOnInit(): void {}
}
