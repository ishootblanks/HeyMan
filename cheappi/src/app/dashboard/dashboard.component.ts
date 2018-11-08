
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ApiClientServiceService } from '../api-client-service.service';
// import { Location } from '../location';
// import { MapComponent } from '../map/map.component';
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
  start_latitude = 0;
  start_longitude = 0;
  end_latitude = 0;
  end_longitude = 0;

  params: number[] = [];

   onEnter(event: any) {
     this.origin = event.target.value + ' | ';
     console.log(this.origin);
   }

   onEnter2(event: any) {
     this.destination = event.target.value + ' | ';
     console.log(this.destination);
   }

   // click event

   onClickMe() {
     // console.log(event);
     // e.preventDefault();
     this.getOrigin();
     this.getDestination();
   }


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
