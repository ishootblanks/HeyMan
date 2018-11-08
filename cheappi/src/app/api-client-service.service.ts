import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { DashboardComponent } from  './dashboard/dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class ApiClientServiceService {
  private baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';
  private uberURL = 'https://api.uber.com/v1.2/estimates/price';


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

  // httpOptions = {
  //   params: this.params,
  //   headers: new HttpHeaders({
  //     'Authorization: Token': environment.UBERKEY,
  //     'Accept-Language': 'en_US',
  //     'Content-Type': 'application/json'
  //   })
  // }
  //
  // getEstimate (Params: string): Observable<any> {
  //   console.log('heyyyyyyyyy', this.params);
  //   return this.http.get<any>(this.uberURL, this.httpOptions);
  // }



}
