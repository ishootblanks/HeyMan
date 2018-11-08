
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ApiClientServiceService } from '../api-client-service.service';
import { Location } from '../location';
import { MapComponent } from '../map/map.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  latitude: number = 41.3805446;
  longitude: number = 2.1673817;
  zoom: number = 13;

    // input event
    origin = '';
    destination = '';
    originLat = 0;
    originLng = 0;
    destinationLat = 0;
    destinationLng = 0;

   onEnter(event: any) {
     this.origin = event.target.value + ' | ';
   }

   onEnter2(event: any) {
     this.destination = event.target.value + ' | ';
   }

   // click event

   onClickMe() {
     this.getOrigin()
     this.getDestination()
   }


   constructor(private apiClientService: ApiClientServiceService) { }

     //transfer the input into a function
     getOrigin(): Observable<any> {
       this.apiClientService.getLocation(this.origin).subscribe(response => {
         this.originLat = response.results[0].geometry.location.lat;
         this.originLng = response.results[0].geometry.location.lng;
       });
     }

     //transfer the input into a function
     getDestination(): Observable<any> {
       this.apiClientService.getLocation(this.destination).subscribe(response => {
         this.destinationLat = response.results[0].geometry.location.lat;
         this.destinationLng = response.results[0].geometry.location.lng;
       });
     }


     ngOnInit() {

     }



}
