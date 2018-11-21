import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from  './dashboard/dashboard.component';
import { RideRequestComponent } from './ride-request/ride-request.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'coordinates', component: RideRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }