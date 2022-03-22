import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-residential-map',
  templateUrl: './residential-map.component.html',
  styleUrls: ['./residential-map.component.sass'],
})
export class ResidentialMapComponent implements OnInit {
  // constructor() { }

  zoom = 3;
  center: google.maps.LatLngLiteral = { lat: 38.45994, lng: -99.30812 };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
  };

  markers = [];
  infoContent = '';

  markerPositions: google.maps.LatLngLiteral[] = [
    // Denver, CO
    {
      lat: 39.75804,
      lng: -105.00217,
    },
    // Suwanee, GA
    {
      lat: 34.1189,
      lng: -84.10374,
    },
    // Birmingham, Alabama
    {
      lat: 33.53353,
      lng: -86.81353,
    },
    // St. Louis, Missouri
    {
      lat: 38.63687,
      lng: -90.23405,
    },
    // Mission, Kansas
    {
      lat: 39.02745,
      lng: -94.6554,
    },
  ];
  markerOptions: google.maps.MarkerOptions[] = [
    {
      position: this.markerPositions[0],
      draggable: false,
      clickable: true,
      title: 'Denver, CO',
    },
    {
      position: this.markerPositions[1],
      draggable: false,
      clickable: true,
      title: 'Suwanee, GA',
    },
    {
      position: this.markerPositions[2],
      draggable: false,
      clickable: true,
      title: 'Birmingham, AL',
    },
    {
      position: this.markerPositions[3],
      draggable: false,
      clickable: true,
      title: 'St. Louis, MO',
    },
    {
      position: this.markerPositions[4],
      draggable: false,
      clickable: true,
      title: 'Mission, KS',
    },
  ];

  ngOnInit(): void {}

  zoomIn() {
    this.zoom++;
    console.log('Zoom level: ' + this.zoom);
  }

  zoomOut() {
    this.zoom--;
    console.log('Zoom level: ' + this.zoom);
  }

  click(event: google.maps.MapMouseEvent) {
    console.log(event);
  }
}
