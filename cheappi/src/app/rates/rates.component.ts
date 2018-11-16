import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  @Input()
  origin;

  @Input()
  destination;

  constructor() { }

  ngOnInit() {
  }

}
