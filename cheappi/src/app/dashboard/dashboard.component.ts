
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
    console.log(this.origin);
    console.log(this.destination);
  }

  // input event
  onEnterOrigin(event: any) {
    this.originInput = event.target.value + ' | ';
  }
  onEnterDestination(event: any) {
    this.destinationInput = event.target.value + ' | ';
  }

  // click event
  onClickMe() {
    this.getOrigin();
    this.getDestination();
  }

  //Get origin coordinates
  getOrigin(): void {
    this.apiClientService.getLocation(this.originInput).subscribe(response => {
      console.log('response', response);
      this.origin.lat = response.results[0].geometry.location.lat;
      this.origin.lng = response.results[0].geometry.location.lng;
      this.apiClientService.getStorageDep(this.origin);
    });
  }

  //Get destination coordinates
  getDestination(): void {
    this.apiClientService.getLocation(this.destinationInput).subscribe(response => {
      this.destination.lat = response.results[0].geometry.location.lat;
      this.destination.lng = response.results[0].geometry.location.lng;
      this.apiClientService.getStorageArr(this.origin);
    });
  }

}
