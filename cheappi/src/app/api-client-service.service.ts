
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


  markers: any[] = [];
  origin= {
    lat: Number,
    lng: Number,
    label: String
  }
  destination= {
    lat: Number,
    lng: Number,
    label: String
  };

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

  // getCoordinates(coordinates: string): Observable<any> {
  //   return this.http
  //     .get(this.routeURL,{
  //       params:{
  //         unit: 'units=imperial&origins=data',
  //         geometry: coordinates,
  //         key:environment.APIKEY
  //       }
  //     })
  // }

  getStorageDep(coordinates: any){
    console.log(coordinates);
    this.origin.lat= coordinates.lat;
    this.origin.lng = coordinates.lng;
    this.origin.label = coordinates.label;
    this.markers.push(this.origin);
    console.log('ori', this.origin);
  }

  getStorageArr(coordinates: any){
    console.log(coordinates);
    this.destination.lat = coordinates.lat;
    this.destination.lng = coordinates.lng;
    this.destination.label = coordinates.label;
    this.markers.push(this.destination);
    console.log('dest', this.destination);
  }


}
