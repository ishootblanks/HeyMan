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

  constructor(
    private http: HttpClient
  ) { }

  getLocation(values: string): Observable<any> {
    return this.http
      .get(this.baseURL,{
        params:{
          address: values,
          key:environment.APIKEY
        }
      })
  }

  getMarker() {

  }


}
