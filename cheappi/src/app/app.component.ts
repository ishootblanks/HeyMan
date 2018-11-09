
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rapido';
  myImage : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOBbyZXF9_Gb5CbUeb_WhlBhXLFqy3eJLqNmZGaLBL2HMpX_C9Q";

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate([''])
  }
}
