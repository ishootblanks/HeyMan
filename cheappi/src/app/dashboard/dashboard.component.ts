
import { Component, OnInit, Input } from '@angular/core';
import { ApiClientServiceService } from '../api-client-service.service';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // object start
  origin = {
    lat: null,
    lng: null,
    title: 'A'
  };

  // object finish
  destination = {
    lat: null,
    lng: null,
    title: 'B'
  };

  // temp store string address
  originInput;
  destinationInput;


  constructor(private apiClientService: ApiClientServiceService, public dialog: MatDialog) { }

  ngOnInit() {
  }


  onClickMe() {
    console.log('qwertyuio', !this.originInput);
    if ((!this.originInput) || (!this.destinationInput)) {
      this.openDialog();
    } else {
      this.getCoordinates(this.originInput, this.origin);
      this.getCoordinates(this.destinationInput, this.destination);
      console.log(this.originInput);

    }
  }


  handleAddressChangeOrigin(event: any) {
    this.originInput = event.formatted_address;
  }

  handleAddressChangeDestination(event: any) {
    this.destinationInput = event.formatted_address;
  }

  openDialog(): void {
    this.dialog.open(MyDialogComponent).afterClosed()
    .subscribe(result => {
      console.log(result);
    });
  }

  getCoordinates(input, point): void {
    this.apiClientService.getLocation(input).subscribe(response => {
      if(point === this.origin) {
        this.origin = {
          ...this.origin,
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng,
        }
      } else {
        this.destination = {
          ...this.destination,
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng,
        };
      }
    });
  }

}
