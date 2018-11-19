
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ApiClientServiceService } from './api-client-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TaxiService } from './taxi.service';
import { RatesItemComponent } from './ratesItem/ratesItem.component';
import { MapComponent } from './map/map.component';
import { RoadComponent } from './road/road.component';
import { RatesComponent } from './rates/rates.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RatesItemComponent,
    MapComponent,
    RoadComponent,
    RatesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    AgmDirectionModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: environment.APIKEY,
    })
  ],
  providers: [ApiClientServiceService, TaxiService],
  bootstrap: [AppComponent]
})



export class AppModule { }
