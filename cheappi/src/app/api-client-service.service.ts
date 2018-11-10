
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
  private routeURL = 'https://maps.googleapis.com/maps/api/distancematrix/json';


  constructor(private http: HttpClient) { }

  getLocation(data: string): Observable<any> {
    return this.http
      .get(this.baseURL,{
        params:{
          address: data,
          key:environment.APIKEY
        }
      })
  }

  getEstimate(dataparams: string): Observable<any> {
    return this.http
      .get(this.uberURL, {
        params:{
          coordinates: dataparams,
          uberKey: environment.UBERKEY
        }
      })
  }

  getCoordinates(coordinates: string): Observable<any> {
    return this.http
      .get(this.routeURL,{
        params:{
          unit: 'units=imperial&origins=data',
          geometry: coordinates,
          key:environment.APIKEY
        }
      })
  }

}
