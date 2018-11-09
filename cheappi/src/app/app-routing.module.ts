
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from  './dashboard/dashboard.component';
import { UberComponent } from './uber/uber.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'fares', component: UberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
