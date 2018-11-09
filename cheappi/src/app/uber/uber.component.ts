
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  @Input() public Data;

  constructor(private apiClientService: ApiClientServiceService) { }


  getParams(): void {
    console.log('j arrive ici');
    console.log(this.Data);
    this.apiClientService.getEstimate().subscribe((params: Data) => this.params = this.Data);
  }

  ngOnInit() {
    this.getParams();
  }

}
