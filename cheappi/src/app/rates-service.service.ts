import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatesServiceService {
  private url: string = 'http://localhost:3000/estimate'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: {
      'Authorization': `Token ${environment.UBERKEY}`,
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json',
    }
  }

  getEstimate(origin, destination): Observable<any>{
    console.log('hey', origin);
    return this.http
      .get(this.url,{
        headers: {
          coordinates: `${origin.lat} ${origin.lng} ${destination.lat} ${destination.lng}`,
        }
      })
  }
}
