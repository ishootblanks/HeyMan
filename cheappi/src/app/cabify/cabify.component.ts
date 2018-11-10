import { Component, OnInit, Input } from '@angular/core';
import { TaxiService } from '../taxi.service';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-cabify',
  templateUrl: './cabify.component.html',
  styleUrls: ['./cabify.component.css']
})
export class CabifyComponent implements OnInit {
  imgLink : string ="assets/cabify.png";
  bookNow: string ="assets/book.jpeg";

  data;

  constructor(private taxiService: TaxiService) { }

  showFare() {
    this.taxiService.getFare()
      .subscribe(data => this.data = data);
  }

  ngOnInit() {
    this.showFare();
  }

}
