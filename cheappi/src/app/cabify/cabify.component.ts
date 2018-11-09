import { Component, OnInit, Input } from '@angular/core';
import { TaxiService } from '../taxi.service';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-cabify',
  templateUrl: './cabify.component.html',
  styleUrls: ['./cabify.component.css']
})
export class CabifyComponent implements OnInit {


  data: Data;

  constructor(
    private taxiService: TaxiService,
    private apiClientService: ApiClientServiceService
  ) { }

  showFare() {
    this.taxiService.getFare()
      .subscribe((data : Data) => this.data = data.price);
  }

  ngOnInit() {
    this.showFare();
  }

}
