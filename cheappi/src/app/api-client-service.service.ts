
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiClientServiceService {
  private baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';
  private uberURL = 'http://localhost:3000/uber';

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

  params= Object.assign({}, this.params, {uberKey: environment.UBERKEY});

  getEstimate(dataparams): Observable<any> {
  console.log('params', dataparams);
    return this.http.get(this.uberURL, this.params);
  }
}
