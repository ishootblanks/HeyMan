import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // set up the map view on first load
  title: string = 'My first AGM project';
  lat: number = 41.3805446;
  lng: number = 2.1673817;
  zoom: number = 13;

  // click event
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You will get your fares!';
  }

  constructor() { }

  ngOnInit() {
  }

}
