import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashComponent } from './dash/dash.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantComponent } from './plant/plant.component';
import { ChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [DashboardComponent, SidebarComponent, DashComponent, PlantsComponent, PlantComponent, ProfileComponent, CountryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    SlickCarouselModule,
    ChartsModule,
    FormsModule
  ]
})
export class DashboardModule { }
