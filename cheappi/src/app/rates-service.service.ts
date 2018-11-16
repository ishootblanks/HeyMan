import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatesServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: {
      'Authorization': `Token ${environment.UBERKEY}`,
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json',
    }
  }

  getEstimate(origin, destination): Observable<any> {
    const uber = `https://api.uber.com/v1.2/estimates/price?start_latitude=${origin.lat}&start_longitude=${origin.lng}&end_latitude=${destination.lat}&end_longitude=${destination.lng}`;
    return this.http.get(uber, this.httpOptions)
  }
}
