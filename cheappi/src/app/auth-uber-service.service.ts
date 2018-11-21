import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthUberServiceService {
  private url: string = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  getAccessToken(tempToken): Observable<any>{
    console.log(tempToken);
    return this.http
      .get(this.url,{
        headers: {temptoken: tempToken,}
      })
  }
}
