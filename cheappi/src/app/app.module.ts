
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MapComponent } from './map/map.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ApiClientServiceService } from './api-client-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TaxiService } from './taxi.service';
import { UberComponent } from './uber/uber.component';
import { CabifyComponent } from './cabify/cabify.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // MapComponent,
    UberComponent,
    CabifyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
     apiKey: environment.APIKEY
   })
  ],
  providers: [ApiClientServiceService, TaxiService],
  bootstrap: [AppComponent]
})



export class AppModule { }
