
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiClientServiceService } from '../api-client-service.service';
import { TaxiService } from '../taxi.service';



@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  imgLink: string ="assets/download.png";
  bookNow: string ="assets/book.jpeg";

  data;

  constructor(private taxiService: TaxiService) { }

  // fetching params to uber api call
  getParams() {
    this.taxiService.getEstimate(this.data)
      .subscribe(param => this.data = param);
    // console.log(this.data);
  }

  ngOnInit() {
    this.getParams();
  }

}
