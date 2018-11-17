import { Component, OnInit, Input } from '@angular/core';
import { ApiClientServiceService } from '../api-client-service.service';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.css']
})
export class RoadComponent implements OnInit {

  @Input() markers;
  @Input() origin;
  @Input() destination;
  @Input() title;

  constructor(private apiClientService: ApiClientServiceService) {  }

  ngOnInit() {
  }

}
