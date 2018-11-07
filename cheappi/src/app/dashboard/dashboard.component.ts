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
  values = '';

  onEnter(event: any) {
    this.values += event.target.value + ' | ';
    this.getLocation();
  }
  location: Location[];


  constructor(private apiClientService: ApiClientServiceService) { }

    //transfer the input into a function
    getLocation() {
      this.apiClientService.getLocation(this.values).subscribe(response => {
        this.location = response.results;
      });
    }

    ngOnInit() {

    }


}
