
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiClientServiceService } from '../api-client-service.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AuthUberServiceService } from '../auth-uber-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{
  tempToken: string;
  private sub: any;
  
  // object start
  origin = {
    lat: null,
    lng: null,
    title: 'A',
    adress: null,
  };

  // object finish
  destination = {
    lat: null,
    lng: null,
    title: 'B',
    adress: null,
  };

  // temp store string address
  originInput;
  destinationInput;


  constructor(private apiClientService: ApiClientServiceService, private route: ActivatedRoute, private authUberServiceService: AuthUberServiceService) { }


  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(qParams => {
       this.tempToken = qParams['code'];
       if (this.tempToken) {
        this.authUberServiceService.getAccessToken(this.tempToken).subscribe((res) => {
          console.log('a', res);
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
      if(point === this.origin) {
        this.origin = {
          ...this.origin,
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng,
          adress: input,
        }
      } else {
        this.destination = {
          ...this.destination,
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng,
          adress: input,
        }
      }
    });
  }

}
