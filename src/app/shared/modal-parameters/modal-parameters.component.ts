import { PlantsService } from './../../services/plants.service';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
var alertify = require('alertifyjs');

@Component({
  selector: 'app-modal-parameters',
  templateUrl: './modal-parameters.component.html',
  styleUrls: ['./modal-parameters.component.scss']
})
export class ModalParametersComponent implements OnInit {
  @ViewChild('close', { static: true }) closebutton;
  @Input() planta: number;
  @Output() propagar = new EventEmitter();
  protected historico = {
    "fecha": "",
    "humedad": null,
    "luz_solar": null,
    "temperatura": null,
  }
  constructor(private plantsService: PlantsService) { }

  ngOnInit() {

  }
  formato(texto) {
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3-$2-$1');
  }

  addParam() {
    let plantita;
    // this.historico.fecha = this.formato(this.historico.fecha);
    this.plantsService.getPlant(this.planta)
      .subscribe(resp => {
        console.log(resp);
        plantita = resp;
        console.log(plantita.historico);
        plantita.historico.push(this.historico);
        console.log(plantita);
        let Datos1 = plantita.historico;
    Datos1.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
    });
    plantita.historico = Datos1;
        this.plantsService.updatePlant(this.planta, plantita.historico)
          .subscribe(result => {
            if (result) {
              this.propagar.emit();
              this.closebutton.nativeElement.click();
              
            }
            else {
              alertify.alert("El usuario no se ha podido ingresar");
            }
          })
      });

  }

}
