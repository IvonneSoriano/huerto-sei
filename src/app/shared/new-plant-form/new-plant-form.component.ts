import { PlantInterface } from './../../models/plantInterface';
import { PlantsService } from './../../services/plants.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-plant-form',
  templateUrl: './new-plant-form.component.html',
  styleUrls: ['./new-plant-form.component.scss']
})
export class NewPlantFormComponent implements OnInit {

  @Output() propagar = new EventEmitter();

  protected plant : PlantInterface = {    
    nombre: '',
    descripcion: '',
    tipo_tierra: '',
    historico: null
  }

  constructor(private plantsService: PlantsService) { }

  ngOnInit() {
  }

  showPlant(){
    console.log(this.plant);
  }

  insertPlant(form : NgForm){
    if(form.valid){
      this.plantsService.insertPlant(this.plant.nombre, this.plant.descripcion, this.plant.tipo_tierra, this.plant.historico)
      .subscribe(resp => {
          console.log(resp);
          this.plantsService.allPlants.push(resp);
          this.propagar.emit();
          // this.plantsService.allPlants.push({'nombre':this.plant.nombre, 
          // 'descripcion': this.plant.descripcion, 
          // 'tipo_tierra': this.plant.tipo_tierra, 
          // 'historico':this.plant.historico});
      });
    }
  }

}
