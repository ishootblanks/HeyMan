
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


  // building markers
  // markers: any = []
  // other: any;
  //
  // // get params from service
  // params: string;
  // private coordinates: any;
  // coordinates = this.apiClientService.params;


  constructor(private apiClientService: ApiClientServiceService) { }


  // getMarker() {
  //   console.log(this.coordinates);
  //   setTimeout(() => {
  //     this.markers.push(
  //       {
  //         latitude: this.coordinates[0],
  //         longitude: this.coordinates[1],
  //         label: 'A'
  //       },
  //       {
  //         latitude: this.coordinates[2],
  //         longitude: this.coordinates[3],
  //         label: 'B'
  //       }
  //     )
  //   }, 600);
  // }

  ngOnInit() {
    this.getUserLocation ();
  }

}
