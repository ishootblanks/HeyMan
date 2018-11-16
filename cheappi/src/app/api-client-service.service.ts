
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

  coordinatesFetched = false;

  markers: any = [];
  
  origin= {
    lat: Number,
    lng: Number,
    title: String
  }
  destination= {
    lat: Number,
    lng: Number,
    title: String
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
    this.origin.title = coordinates.title;
    this.markers.push(this.origin);
  }

  getStorageArr(coordinates: any){
    this.destination.lat = coordinates.lat;
    this.destination.lng = coordinates.lng;
    this.destination.title = coordinates.title;
    this.markers.push(this.destination);
  }

  // httpOptions = {
  //   headers: {
  //     'Authorization': `Token ${environment.UBERKEY}`,
  //     'Accept-Language': 'en_US',
  //     'Content-Type': 'application/json',

  //   }
  // }


  // getEstimate(): Observable<any> {
  //   console.log('m*', this.markers);
  //   console.log('origin', this.origin);
  //   console.log('destination', this.destination);
  //   // console.log(this.markers[0].lat, this.markers[0].lng);
  //   // console.log(this.markers[1].lat, this.markers[1].lng);his
  //   if (this.markers[0]) {
  //     const uber = `https://api.uber.com/v1.2/estimates/price?start_latitude=${this.markers[0].lat}&start_longitude=${this.markers[0].lng}&end_latitude=${this.markers[1].lat}&end_longitude=${this.markers[1].lng}`;
  //     return this.http.get(uber, this.httpOptions )
  //   }
  //   return;
  //   // const uber = `https://api.uber.com/v1.2/estimates/price?start_latitude=41.4039286&start_longitude=2.181874&end_latitude=41.38666810000001&end_longitude=2.197179`;
  // }

  // getEstimate(): Observable<any> {
  //
  //   console.log(this.markers);
  //   const uber = `https://api.uber.com/v1.2/estimates/price?start_latitude=${this.markers[0].lat}&start_longitude=${this.markers[0].lng}&end_latitude=${this.markers[1].lat}&end_longitude=${this.markers[1].lng}`;
  //   return this.http.get(uber, { headers: { Authorization: environment.UBERKEY,
  //   }}
  //   )
  // }
}
