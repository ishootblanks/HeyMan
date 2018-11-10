
import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ApiClientServiceService } from '../api-client-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() public Marker;

  // building markers
  markers = [];

  // get params from service
  coordinates = this.apiClientService.params.params;


  constructor(private apiClientService: ApiClientServiceService) { }


  getMarker() {
    this.markers.push(
      {
        lat: this.coordinates[0],
        lng: this.coordinates[1],
        label: 'A'
      },
      {
        lat: this.Marker[2],
        lng: this.Marker[3],
        label: 'B'
      }
    )
  }

  myPromise = new Promise(
    function (resolve, reject) {
      setTimeout(() => {
        console.log(this.coordinates);
        resolve(this.getMarker());
      }, 1000);
    }
  )

  ngOnInit() {

  }

}
