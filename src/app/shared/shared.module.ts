import { CardPlantComponent } from './card-plant/card-plant.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewPlantFormComponent } from './new-plant-form/new-plant-form.component';
import { ModalParametersComponent } from './modal-parameters/modal-parameters.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';


@NgModule({
  declarations: [
    CardPlantComponent,
    NewPlantFormComponent,
    ModalParametersComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    FormsModule
  ],
  exports: [
    CardPlantComponent,
    NewPlantFormComponent,
    ModalParametersComponent

  ]
})
export class SharedModule { }
