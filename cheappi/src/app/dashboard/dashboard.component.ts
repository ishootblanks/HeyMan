
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

  // change map view
  toggle: boolean = true;


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

   params: any = [];



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
         this.getParams();
         this.getMarker();
       });
     }


     // fetching params to uber api call
     getParams() {
       this.apiClientService.getEstimate(this.params).subscribe(param =>
         this.params = param

       );
       console.log(this.params);
     }


     // building marker for route map
     latitude: number;
     longitude: number;
     coordinates: any = [];
     getMarker() {
       this.apiClientService.getCoordinates(this.params).subscribe(param =>{
          this.coordinates.push(
            {
              latitude: this.params[0],
              longitude: this.params[1],
              label: 'A'
            },
            {
              latitude: this.params[2],
              longitude: this.params[3],
              label: 'B'
            }
          )
       });
       this.toggle = false;
       console.log(this.coordinates);
     }

     ngOnInit() {

     }

}
