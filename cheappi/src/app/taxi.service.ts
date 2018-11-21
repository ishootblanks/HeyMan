
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';



@Injectable({
  providedIn: DashboardComponent,
})
export class TaxiService {
  private cabiUrl: string = 'http://localhost:3000/route';

  constructor(private http: HttpClient) { }

  getFare() {
    return this.http.get(this.cabiUrl);
  }

  // getEstimate(dataparams) {
  //   return this.http.get(this.uberURL, {
  //       params:{
  //         coordinates: dataparams,
  //         uberKey: environment.UBERKEY
  //       }
  //     })
  // }


}
