
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ApiClientServiceService } from '../api-client-service.service';
import { Location } from '../location';
import { MapComponent } from '../map/map.component';

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
    marker1 = '';
    marker2 = '';

   onEnter(event: any) {
     this.marker1 += event.target.value + ' | ';
     this.getLocation();
   }

   onEnter2(event: any) {
     this.marker2 += event.target.value + ' | ';
     this.getDestination();
   }

   origin: Location[];
   destination: Location[];

   // click event
   clickMessage = '';

   onClickMe() {
     this.clickMessage = '...loading';
   }


   constructor(private apiClientService: ApiClientServiceService) { }

     //transfer the input into a function
     getLocation() {
       this.apiClientService.getLocation(this.marker1).subscribe(response => {
         this.origin = response.results;
         this.latitude = response.results[0].geometry.location.lat;
         this.longitude = response.results[0].geometry.location.lng;
         console.log(this.origin);
         console.log(this.latitude);
       });
     }

     //transfer the input into a function
     getDestination() {
       this.apiClientService.getLocation(this.marker2).subscribe(response => {
         this.destination = response.results;
         this.latitude = response.results[0].geometry.location.lat;
         this.longitude = response.results[0].geometry.location.lng;
       });
     }


     ngOnInit() {

     }



}
