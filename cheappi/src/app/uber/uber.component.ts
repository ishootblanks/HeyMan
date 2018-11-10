
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  imgLink: string ="assets/download.png";
  bookNow: string ="assets/book.jpeg";

  @Input() public Data;

  // get params from service
  coordinates = this.apiClientService.params.params;

  constructor(private apiClientService: ApiClientServiceService) { }


  getParams(): void {
    this.apiClientService.getEstimate(this.Data).subscribe(params => this.Data = params);
  }

  ngOnInit() {
    this.getParams();
  }

}
