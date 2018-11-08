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


   constructor(private apiClientService: ApiClientServiceService) { }

     //transfer the input into a function
     getLocation() {
       this.apiClientService.getLocation(this.marker1).subscribe(response => {
         this.origin = response.results;
         console.log(this.origin);
       });
     }

     //transfer the input into a function
     getDestination() {
       this.apiClientService.getLocation(this.marker2).subscribe(response => {
         this.destination = response.results;
         console.log(this.destination);
       });
     }


     ngOnInit() {

     }



}
