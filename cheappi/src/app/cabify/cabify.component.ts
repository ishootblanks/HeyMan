import { Component, OnInit } from '@angular/core';
import { TaxiService } from '../taxi.service';


@Component({
  selector: 'app-cabify',
  templateUrl: './cabify.component.html',
  styleUrls: ['./cabify.component.css']
})
export class CabifyComponent implements OnInit {

  fare: [];

  constructor(private taxiService: TaxiService) { }

  getFare() {
    this.taxiService.getFare().subscribe(response => {
      console.log(response.results);
      this.fare = response.results;
      console.log(this.fare);

    });
  }

  ngOnInit() {
  }

}
