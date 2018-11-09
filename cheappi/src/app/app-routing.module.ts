
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from  './dashboard/dashboard.component';
import { UberComponent } from './uber/uber.component';
import { CabifyComponent } from './cabify/cabify.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'fares', component: UberComponent },
  { path: 'fares', component: CabifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
