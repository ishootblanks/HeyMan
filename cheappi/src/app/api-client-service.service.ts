
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiClientServiceService {
  private baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';

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
}
