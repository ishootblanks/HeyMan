
import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ApiClientServiceService } from '../api-client-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() marker;
  @Input() toggle;

  // map on init
  latitude: number;
  longitude: number;
  zoom: number = 16;

  getUserLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }


  constructor(private apiClientService: ApiClientServiceService) { }


  ngOnInit() {
    this.getUserLocation ();
  }

}
