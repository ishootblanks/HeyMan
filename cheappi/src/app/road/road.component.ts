import { Component, OnInit, Input } from '@angular/core';
import { ApiClientServiceService } from '../api-client-service.service';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.css']
})
export class RoadComponent implements OnInit {

  @Input() markers;

  origin;
  destination;

  getDirection() {
  this.origin = { lat: 41.3808941, lng: 2.1893853 },
  this.destination = { lat: 41.4141316, lng: 2.1341654 }
}

  constructor(private apiClientService: ApiClientServiceService) {  }



  ngOnInit() {
    this.getDirection();
  }

}
