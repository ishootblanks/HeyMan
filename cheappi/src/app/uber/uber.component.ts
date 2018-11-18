
import { Component, Input, OnInit } from '@angular/core';
import { RatesServiceService } from '../rates-service.service';



@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {
  @Input()
  origin;

  @Input()
  destination;

  imgLink: string = "assets/download.png";
  bookNow: string = "assets/book.jpeg";
  rightArrow: string = "assets/right-arrow.png";

  price;
  distance;
  duration;

  constructor(private ratesService: RatesServiceService) { }

  ngOnInit() {
    this.ratesService.getEstimate(this.origin, this.destination).subscribe(res => {
      this.price = res.prices[0].estimate;
        this.distance = (res.prices[0].distance * 1.6);
        this.duration = res.prices[0].duration / 60;
    });
  }
  

}
