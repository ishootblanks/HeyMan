import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiClientServiceService } from '../api-client-service.service';

@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {
  private baseURL = 'https://api.uber.com/v1.2/estimates/price';

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization: Token': environment.UBERKEY,
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private http: HttpClient,
    private apiClientService: ApiClientServiceService
  ) { }

  getEstimate (values: string): Observable<any> {
    console.log('heyyyyyyyyy', values);
    return this.http.get<any>(this.httpOptions, this.baseURL, values);
  }

  ngOnInit() {
  }

}
