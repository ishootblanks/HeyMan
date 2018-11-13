
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

  // data;
  price;
  distance;
  duration;


  constructor(
    private taxiService: TaxiService,
    private apiClientService: ApiClientServiceService
  ) { }

  // fetching params to uber api call

  ngOnInit() {
    setTimeout(() =>{
        this.apiClientService.getEstimate()
        .subscribe(response => {
          this.price = response.prices[0].estimate;
          this.distance = (response.prices[0].distance * 160)/100;
          this.duration = response.prices[0].duration / 60;
      })
    })
  }

}
