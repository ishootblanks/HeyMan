
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class ApiClientServiceService {
  private baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';

  private routeURL = 'https://maps.googleapis.com/maps/api/distancematrix/json';


  markers: string[] = [];

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

  getStorage(coordinates: any){
    this.markers.push(coordinates);
    console.log(this.markers);
    return this.markers;
  }


}
