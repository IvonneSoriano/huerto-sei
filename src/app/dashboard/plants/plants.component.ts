import { PlantsService } from './../../services/plants.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  @ViewChild('closeNew', { static: true }) closebutton;

  constructor(private plantsService: PlantsService, private router: Router) { }

  ngOnInit() {
    this.getPlants();
  }

  protected plants = null;
  protected selectedPlant;


  getPlants() {
    this.plantsService.getPlants()
      .subscribe(result => {
        console.log(result);
        this.plantsService.allPlants = result;
        console.log('aqui');
        console.log(this.plantsService.allPlants);
        this.plants = this.plantsService.allPlants;
      });
  }

  passParam(id: number) {
    console.log(id);
    this.selectedPlant = id;
  }
  closeModal() {
    this.getPlants();
    this.closebutton.nativeElement.click();

  }
  

  navigate(id) {
    this.router.navigate([`/plant/${id}`]);
  }

}
