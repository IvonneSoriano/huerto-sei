import { Component, OnInit, Input } from '@angular/core';
import { PlantsService } from './../../services/plants.service';
import {PlantInterface} from '../../models/plantInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.scss']
})
export class CardPlantComponent implements OnInit {

  @Input() plant={
    name: ''
  };

  constructor(private plantsService: PlantsService, private router: Router) { }

  ngOnInit() {
    this.getPlants();
    
  }
  

  protected plants;

  getPlants(){
    this.plantsService.getPlants()
    .subscribe(result =>{
      console.log(result);
      this.plantsService.allPlants = result;
      console.log('aqui');
      console.log(this.plantsService.allPlants);
      this.plants = this.plantsService.allPlants;
    });
  }

 
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false,
    responsive: [
      {
      breakpoint: 900,
      settings: {
      slidesToShow: 3
      }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 2
        }
        },
      {
      breakpoint: 600,
      settings: {
      slidesToShow: 1
      }
      }
      ]
  };

  navigate(id){
    this.router.navigate([`/plant/${id}`]);
  }
}
