import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cabify',
  templateUrl: './cabify.component.html',
  styleUrls: ['./cabify.component.css']
})
export class CabifyComponent implements OnInit {
  baseUrl: string = 'http://localhost:3000/route';

  constructor(private http: HttpClient) { }

  getFare (): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  ngOnInit() {
  }

}
