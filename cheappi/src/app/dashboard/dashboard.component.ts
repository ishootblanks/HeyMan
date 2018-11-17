
import { Component, OnInit, Input } from '@angular/core';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // object start
  origin = {
    lat: null,
    lng: null,
    title: 'A'
  };

  // object finish
  destination = {
    lat: null,
    lng: null,
    title: 'B'
  };

  // temp store string address
  originInput;
  destinationInput;


  constructor(private apiClientService: ApiClientServiceService) { }

  ngOnInit() {
  }

  // click event
  onClickMe() {
    this.getCoordinates(this.originInput, this.origin);
    this.getCoordinates(this.destinationInput, this.destination);
  }

  handleAddressChangeOrigin(event) {
    this.originInput = event.formatted_address + ' | ';
  }

  handleAddressChangeDestination(event) {
    this.destinationInput = event.formatted_address + ' | ';
  }

  getCoordinates(input, point): void {
    this.apiClientService.getLocation(input).subscribe(response => {
      point.lat = response.results[0].geometry.location.lat;
      point.lng = response.results[0].geometry.location.lng;
      this.apiClientService.setStorage(point);
    });
  }

}
