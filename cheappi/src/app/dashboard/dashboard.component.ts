
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ApiClientServiceService } from '../api-client-service.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // map on init
  latitude: number = 41.394923;
  longitude: number = 2.197632;
  zoom: number = 13;

  // input event
  origin = '';
  destination = '';

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

   // builing geocoordinates params for API
   start_latitude = 0;
   start_longitude = 0;
   end_latitude = 0;
   end_longitude = 0;

   public params: number[] = [];


   constructor(private apiClientService: ApiClientServiceService) { }

     //transfer the input Origin into a function
     getOrigin(): void {
       this.apiClientService.getLocation(this.origin).subscribe(response => {
         this.start_latitude = response.results[0].geometry.location.lat;
         this.start_longitude = response.results[0].geometry.location.lng;
         this.params.push(this.start_latitude, this.start_longitude);
       });
     }

     //transfer the input Destination into a function
     getDestination(): void {
       this.apiClientService.getLocation(this.destination).subscribe(response => {
         this.end_latitude = response.results[0].geometry.location.lat;
         this.end_longitude = response.results[0].geometry.location.lng;
         this.params.push(this.end_latitude, this.end_longitude);
         console.log(this.params);
       });
     }

     ngOnInit() {

     }



}
