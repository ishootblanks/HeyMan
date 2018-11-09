import { Component, OnInit, Input } from '@angular/core';
import { TaxiService } from '../taxi.service';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-cabify',
  templateUrl: './cabify.component.html',
  styleUrls: ['./cabify.component.css']
})
export class CabifyComponent implements OnInit {


  data ;

  constructor(private taxiService: TaxiService) { }

  showFare() {

    this.taxiService.getFare()
      .subscribe(data =>
        {

        console.log(data);
      }
        //
        // this.data: price;
        // this.data.distance,
        // this.data.time
      );
  }

  ngOnInit() {
    this.showFare();
  }

}
