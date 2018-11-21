import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ride-request',
  templateUrl: './ride-request.component.html',
  styleUrls: ['./ride-request.component.css']
})
export class RideRequestComponent implements OnInit, OnDestroy {
  state: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let origin;
    let destination;
    this.sub = this.route.queryParams.subscribe(qParams => {
     if (qParams['state']) {
       this.state = qParams['state'].split(' divide ');
       origin = {
         lat: +this.state[0],
         lng: +this.state[1],
       }
       destination = {
         lat: +this.state[2],
         lng: +this.state[3],
       }
     }
   });
    window.location.href = `http://m.uber.com/?client_id=${environment.UBERCLIENTID}l&action=setPickup&pickup[latitude]=${origin.lat}&pickup[longitude]=${origin.lng}&pickup[nickname]=${this.state[4]}&dropoff[latitude]=${destination.lat}&dropoff[longitude]=${destination.lng}&dropoff[nickname]=${this.state[5]}&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d`;
  }

}
