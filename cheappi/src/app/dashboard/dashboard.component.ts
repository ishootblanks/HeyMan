
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
    this.getOrigin();
    this.getDestination();
  }
  handleAddressChangeOrigin(event) {
    this.originInput = event.formatted_address + ' | ';
  }
  handleAddressChangeDestination(event) {
    this.destinationInput = event.formatted_address + ' | ';
  }

  // Get origin coordinates
  getOrigin(): void {
    this.apiClientService.getLocation(this.originInput).subscribe(response => {
      this.origin.lat = response.results[0].geometry.location.lat;
      this.origin.lng = response.results[0].geometry.location.lng;
      this.apiClientService.getStorageDep(this.origin);
    });
  }

  // Get destination coordinates
  getDestination(): void {
    this.apiClientService.getLocation(this.destinationInput).subscribe(response => {
      this.destination.lat = response.results[0].geometry.location.lat;
      this.destination.lng = response.results[0].geometry.location.lng;
      this.apiClientService.getStorageArr(this.destination);
    });
  }

}
