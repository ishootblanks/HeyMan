import { Component, OnInit, Input } from '@angular/core';
import { TaxiService } from '../taxi.service';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-cabify',
  templateUrl: './cabify.component.html',
  styleUrls: ['./cabify.component.css']
})
export class CabifyComponent implements OnInit {

  private _fare = '';

  @Input()
  set fare(fare: string) {
    console.log(fare);
    this._fare = (fare && fare.trim()) || '<no name set>';
  }

  get fare(): string { return this._fare; }

  constructor(
    private taxiService: TaxiService,
    private apiClientService: ApiClientServiceService
  ) { }

  // getFare() {
  //   this.taxiService.getFare().subscribe(response => {
  //     console.log(response.results);
  //     this.fare = response.results;
  //     console.log(this.fare);
  //
  //   });
  // }

  ngOnInit() {
  }

}
