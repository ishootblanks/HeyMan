
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiClientServiceService } from '../api-client-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  imgLink: string ="assets/download.png";
  bookNow: string ="assets/book.jpeg";

  params: string;
  private fare: any;

  constructor(
    private apiClientService: ApiClientServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // 
  // getParams() {
  //   this.apiClientService.getEstimate(this.params).subscribe(fare => this.params = fare);
  // }

  ngOnInit() {
    // this.getParams();
  }

}
