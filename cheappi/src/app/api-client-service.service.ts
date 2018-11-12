
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


  markers: any = [];
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

  getStorageDep(coordinates: any){
    this.origin.lat= coordinates.lat;
    this.origin.lng = coordinates.lng;
    this.origin.label = coordinates.label;
    this.markers.push(this.origin);
  }

  getStorageArr(coordinates: any){
    this.destination.lat = coordinates.lat;
    this.destination.lng = coordinates.lng;
    this.destination.label = coordinates.label;
    this.markers.push(this.destination);
  }



  httpOptions = {
    headers: {
      'Authorization': environment.UBERKEY,
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json',

    }
  }


  // getEstimate(): Observable<any> {
  //   console.log(this.markers);
  //   const uber = `https://api.uber.com/v1.2/estimates/price?start_latitude=${this.markers[0].lat}&start_longitude=${this.markers[0].lng}&end_latitude=${this.markers[1].lat}&end_longitude=${this.markers[1].lng}`;
  //   return this.http.get(uber, this.httpOptions )
  // }

  // getEstimate(): Observable<any> {
  //
  //   console.log(this.markers);
  //   const uber = `http://localhost:4200/api.uber.com/v1.2/estimates/price?start_latitude=${this.markers[0].lat}&start_longitude=${this.markers[0].lng}&end_latitude=${this.markers[1].lat}&end_longitude=${this.markers[1].lng}`;
  //   return this.http.get(uber, { headers: { Authorization: environment.UBERKEY,
  //   }}
  //   )
  // }
}
