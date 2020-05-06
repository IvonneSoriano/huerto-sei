import { CountryComponent } from './country/country.component';
import { ProfileComponent } from './profile/profile.component';
import { PlantComponent } from './plant/plant.component';
import { DashboardComponent } from './dashboard.component';
import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { UserGuard } from '../guards/user.guard';

const routes: Routes = [
  {path:'', component: DashboardComponent,
children:[
  {path:'', 
  component: DashComponent,
  canActivate: [UserGuard]},
  {path:'', component: DashComponent,  canActivate: [UserGuard]},
  {path:'plants', component: PlantsComponent,  canActivate: [UserGuard]},
  {path:'plant/:id', component: PlantComponent,  canActivate: [UserGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [UserGuard]},
  {path:'country', component: CountryComponent, canActivate: [UserGuard]}
]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
