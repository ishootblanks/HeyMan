
import { Component, Input, OnInit } from '@angular/core';
import { RatesServiceService } from '../rates-service.service';



@Component({
  selector: 'app-rates-item',
  templateUrl: './ratesItem.component.html',
  styleUrls: ['./ratesItem.component.css']
})
export class RatesItemComponent implements OnInit {
  @Input()
  data;
  
  bookNow: string = "assets/book.jpeg";
  rightArrow: string = "assets/right-arrow.png";

  price;
  distance;
  duration;

  constructor(private ratesService: RatesServiceService) { }

  ngOnInit() {
  }


}
