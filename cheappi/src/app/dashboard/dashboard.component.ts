import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // input event
  values = '';

  onEnter(event: any) {
    this.values += event.target.value + ' | ';
  }

  constructor() { }

  ngOnInit() {
  }

}
