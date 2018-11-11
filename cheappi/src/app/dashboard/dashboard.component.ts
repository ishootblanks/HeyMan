
import { Component, OnInit, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ApiClientServiceService } from '../api-client-service.service';
import { TaxiService } from '../taxi.service';
import { Observable, of } from 'rxjs';
import { Marker } from '../marker';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() markerA = {
    id: 'A',
    latitude: Number,
    longitude: Number,
  };
  @Input() markerB = {
    id: 'B',
    latitude: Number,
    longitude: Number,
  };

  origin;
  destination;

  constructor( private apiClientService: ApiClientServiceService ) { }


  // input event
   onEnter(event: any) {
     this.origin = event.target.value + ' | ';
   }
   onEnter2(event: any) {
     this.destination = event.target.value + ' | ';
   }


   // click event
   onClickMe() {
     this.getOrigin();
     this.getDestination();
   }

   // //transfer the input Origin into a Marker

   getOrigin(): void {
     this.apiClientService.getLocation(this.origin).subscribe(response => {
       this.markerA.latitude = response.results[0].geometry.location.lat;
       this.markerA.longitude = response.results[0].geometry.location.lng;
       this.apiClientService.getStorage(this.markerA);
     });
   }


   //transfer the input Destination into a function
   getDestination(): void {
     this.apiClientService.getLocation(this.destination).subscribe(response => {
       this.markerB.latitude = response.results[0].geometry.location.lat;
       this.markerB.longitude = response.results[0].geometry.location.lng;
       this.apiClientService.getStorage(this.markerB);
     });
   }

   ngOnInit() {

   }

}
