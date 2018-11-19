import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { RatesServiceService } from '../rates-service.service';

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

  data: Object;

  constructor(private ratesService: RatesServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    //UberApi
    this.ratesService.getEstimate(this.origin, this.destination).subscribe(res => {
      this.data = {
        price: res.prices[0].estimate,
        distance: (res.prices[0].distance * 1.6),
        duration: res.prices[0].duration / 60,
        url: "https://www.uber.com/es/fare-estimate/",
        imgLink: "assets/download.png",
      };
    });
  }

  ngOnInit() {
  }

}
