import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { RatesServiceService } from '../rates-service.service';
import { TaxiService } from '../taxi.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnChanges, OnInit {
  @Input()
  origin;

  @Input()
  destination;

  dataCabify: Object;
  dataUber: Object;

  constructor(private ratesService: RatesServiceService, private taxiService: TaxiService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.getCabifyData();
    this.getUberData();
  }

  ngOnInit() {
  }

  getCabifyData() {
    this.taxiService.getFare()
      .subscribe(res =>{
        this.dataCabify = {
          price: res["price"],
          distance: res["distance"],
          duration: res["time"],
          url: "https://cabify.com/es/spain/barcelona/",
          imgLink: "assets/cabify.png",
        };
      });
  }

  getUberData() {
    this.ratesService.getEstimate(this.origin, this.destination).subscribe(res => {
      this.dataUber = {
        price: res.prices[0].estimate,
        distance: (res.prices[0].distance * 1.6),
        duration: res.prices[0].duration / 60,
        url: "https://www.uber.com/es/fare-estimate/",
        imgLink: "assets/uber.png",
      };
    });
  }

}
