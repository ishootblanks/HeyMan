import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() public Marker;

  // building markers
  markers = [];


  constructor() { }


  getMarker() {
    return this.markers.push(
      {
        lat: this.Marker[0].start_latitude,
        lng: this.Marker[1].start_longitude,
        label: 'A'
      },
      {
        lat: this.Marker[2].start_latitude,
        lng: this.Marker[3].start_longitude,
        label: 'B'
      }
    )
  }

  ngOnInit() {
    this.getMarker();
  }

}
