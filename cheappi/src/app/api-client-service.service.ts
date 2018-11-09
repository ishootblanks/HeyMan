import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { DashboardComponent } from  './dashboard/dashboard.component';
import { UberComponent } from './uber/uber.component';


@Injectable({
  providedIn: 'root'
})
export class ApiClientServiceService {
  private baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';
  // private uberURL = 'https://api.uber.com/v1.2/estimates/price';
  private uberURL = 'http://localhost:3000/route';

  constructor(
    private http: HttpClient
  ) { }

  getLocation(data: string): Observable<any> {
    return this.http
      .get(this.baseURL,{
        params:{
          address: data,
          key:environment.APIKEY
        }
      })
  }

  httpOptions = {
    params: this.params,
    headers: new HttpHeaders({
      'Authorization': environment.UBERKEY,
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json'
    })
  }

  getEstimate (): Observable<any> {
    console.log('heyyyyyyyyy');
    console.log(this.httpOptions);
    return this.http.get<params>(this.uberURL, this.httpOptions);
  }


}
