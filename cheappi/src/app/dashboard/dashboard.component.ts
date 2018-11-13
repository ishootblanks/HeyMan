
import { Component, OnInit, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ApiClientServiceService } from '../api-client-service.service';
import { TaxiService } from '../taxi.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // object start
  depart = {
    lat: Number,
    lng: Number,
    title: 'A'
  };

  // object finish
  arrivee = {
    lat: Number,
    lng: Number,
    title: 'B'
  };

  // temp store string address
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
       this.depart.lat = response.results[0].geometry.location.lat;
       this.depart.lng = response.results[0].geometry.location.lng;
       this.apiClientService.getStorageDep(this.depart);
     });
   }


   //transfer the input Destination into a function
   getDestination(): void {
     this.apiClientService.getLocation(this.destination).subscribe(response => {
       this.arrivee.lat = response.results[0].geometry.location.lat;
       this.arrivee.lng = response.results[0].geometry.location.lng;
       this.apiClientService.getStorageArr(this.arrivee);
     });
   }

   ngOnInit() {

   }

}
