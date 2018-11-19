
import { Component, Input, OnInit } from '@angular/core';
import { RatesServiceService } from '../rates-service.service';



@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {
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
