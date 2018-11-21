import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { RatesServiceService } from '../rates-service.service';
import { TaxiService } from '../taxi.service';
import { environment } from 'src/environments/environment';

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

  url;


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
    console.log(this.destination.adress);
    this.ratesService.getEstimate(this.origin, this.destination).subscribe(res => {
      this.dataUber = {
        price: res.prices[0].estimate,
        distance: (res.prices[0].distance * 1.6),
        duration: res.prices[0].duration / 60,
        url: `https://login.uber.com/oauth/v2/authorize?response_type=code&client_id=${environment.UBERCLIENTID}&scope=delivery+history+history_lite+places+profile&state=${this.origin.lat}+divide+${this.origin.lng}+divide+${this.destination.lat}+divide+${this.destination.lng}+divide+${this.origin.adress}+divide+${this.destination.adress}`,
        imgLink: "assets/uber.png",
      };
      console.log('uber', this.dataUber);
    });
  }

}
