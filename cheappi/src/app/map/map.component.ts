import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 41.3903651;
  lng: number = 2.1941609;
  zoom: number = 13;

  constructor() { }

  ngOnInit() {
  }

}
