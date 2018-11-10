import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaxiService {
  private cabiUrl: string = 'http://localhost:3000/route';

  constructor(private http: HttpClient) { }

  getFare() {
    return this.http.get(this.cabiUrl);
  }

}
