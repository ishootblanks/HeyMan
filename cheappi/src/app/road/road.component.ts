import { Component, OnInit, Input } from '@angular/core';
import { ApiClientServiceService } from '../api-client-service.service';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.css']
})
export class RoadComponent implements OnInit {

  // @Input() markers;
  // @Input() origin;
  // @Input() destination;
  public origin: any
  public destination: any


  constructor(private apiClientService: ApiClientServiceService) {  }

  getDirection() {
  this.origin = { lat: 41.403726, lng: 2.182243 }
  this.destination = { lat: 41.362454, lng: 2.137322 }

  }

  ngOnInit() {
    this.getDirection()
  }

}
