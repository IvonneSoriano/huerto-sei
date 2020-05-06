import { PlantInterface } from './../../models/plantInterface';
import { PlantsService } from './../../services/plants.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { Chart } from 'chart.js';
import { ActivatedRoute, Params } from '@angular/router';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';
var alertify = require('alertifyjs');

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  @ViewChild("side", { static: true }) side: ElementRef;

  @ViewChild('lineChart', { static: true }) private chartRef;
  chart: any;

  // private info = [{ 'fecha': '2020-04-10 19:52:00', 'temperatura': 75, 'humedad': 76, 'luz_solar': 25 }, { 'fecha': '2020-04-11 20:00:00', 'temperatura': 64, 'humedad': 85, 'luz_solar': 35 }, { 'fecha': '2020-04-12 19:52:00', 'temperatura': 50, 'humedad': 46, 'luz_solar': 25 }, { 'fecha': '2020-04-13 19:52:00', 'temperatura': 96, 'humedad': 30, 'luz_solar': 25 }];
  protected plant;
  private info = [];
  private predictInfo;
  protected prediccion = null;
  protected pushed = false;
  private config = {
    type: 'line',
    data: {
      labels: [], // your labels array
      datasets: [
        {
          label: '',
          data: [], // your data array
          borderColor: '#f4fdfd',
          fill: false
        }
      ]
    },
    options: {
      // animation: {
      //  duration: 2000,
      //  Easing: 'easeInQuad'
      // },
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    },

  };

  constructor(private render: Renderer2, private activatedRoute: ActivatedRoute, private plantsService: PlantsService) {
    this.plant = this.plantsService.getPlant(this.activatedRoute.snapshot.params.id);
  }


  ngOnInit() {
    this.getValues();
    this.chart = new Chart(this.chartRef.nativeElement, this.config);
  }


  // Pasar la temperatura al grafico
  passTemp() {
    this.removeData();
    let data = [];
    this.info.forEach(da => {
      data.push({ x: da.fecha, y: da.temperatura });
      this.chart.data.labels.push(da.fecha);
    });
    let config = {
      "label": 'Data Real',
      "data": data, // your data array
      "borderColor": '#0063B8',
      'borderWidth': 5,
      "fill": false
    }
    this.chart.data.datasets.push(config);

    this.chartUpdate();
    this.pushed = true;
    // console.log(this.chart.data.datasets);
    this.passTempPredic();
  }


  passTempPredic() {
    let data = [];
    this.predictInfo.forEach(da => {
      data.push({ x: da.fecha, y: da.temperatura });
    });
    let config = {
      "label": 'Data Predecida',
      "data": data, // your data array
      "borderColor": '#B4F3F0',
      'borderWidth': 10,
      "fill": false
    }
    this.chart.data.datasets.push(config);

    this.chartUpdate();
    this.pushed = true;
  }

  // Actualizar el grafico
  chartUpdate() {
    this.chart.update({
      duration: 800,
      easing: 'easeOutBounce'
    }
    );
  }

  // Pasar la humedad al grafico
  passHum() {
    this.removeData();
    let data = [];
    this.info.forEach(da => {
      data.push({ x: da.fecha, y: da.humedad });
      this.chart.data.labels.push(da.fecha);
    });
    let config = {
      "label": 'Data Real',
      "data": data, // your data array
      "borderColor": '#0063B8',
      'borderWidth': 5,
      "fill": false
    }
    this.chart.data.datasets.push(config);

    this.chartUpdate();
    this.pushed = true;
    this.passHumPredic();
  }

  // Prediccion de la humedad
  passHumPredic() {
    let data = [];
    this.predictInfo.forEach(da => {
      data.push({ x: da.fecha, y: da.humedad });
    });
    let config = {
      "label": 'Data Predecida',
      "data": data, // your data array
      "borderColor": '#B4F3F0',
      'borderWidth': 10,
      "fill": false
    }
    this.chart.data.datasets.push(config);
    this.chartUpdate();
  }

  // Pasar la radiacion solar al grafico
  passSol() {
    this.removeData();
    let data = [];
    this.info.forEach(da => {
      data.push({ x: da.fecha, y: da.luz_solar });
      this.chart.data.labels.push(da.fecha);
    });
    let config = {
      "label": 'Data Real',
      "data": data, // your data array
      "borderColor": '#0063B8',
      'borderWidth': 5,
      "fill": false
    }
    this.chart.data.datasets.push(config);

    this.chartUpdate();
    this.pushed = true;
    this.passSolPredic();
  }
// Prediccion de luz luz_solar
passSolPredic() {
  let data = [];
  this.predictInfo.forEach(da => {
    data.push({ x: da.fecha, y: da.luz_solar });
  });
  let config = {
    "label": 'Data Predecida',
    "data": data, // your data array
    "borderColor": '#B4F3F0',
    'borderWidth': 10,
    "fill": false
  }
  this.chart.data.datasets.push(config);

  this.chartUpdate();
  this.pushed = true;
}

  predictData() {    
    this.plantsService.getPredict(this.activatedRoute.snapshot.params.id, this.info.length)
    .subscribe(resp => {
      this.predictInfo = resp;
      console.log(this.predictInfo);
    });
  }




  // Borrar datos de grafico
  removeData() {
    console.log(this.chart.data.datasets.length);
    console.log(this.chart.data.labels.length);
    if (this.chart.data.labels.length != 0) {

      this.chart.data.datasets.splice(1);
    }
    this.chart.data.labels.splice(0);
    console.log(this.chart.data.datasets.length);
    this.chartUpdate();
    console.log("Despues de la eliminada");
    console.log(this.chart.data.datasets.length);
    console.log(this.chart.data.labels.length);
  }


  // Obtener valores
  getValues() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.plantsService.getPlant(this.activatedRoute.snapshot.params.id)
      .subscribe(result => {
        console.log("init");
        console.log(result);
        this.plant = result;
        console.log(this.plant);
        this.info = this.plant.historico;
        console.log("REAL")

        console.log(this.plant.historico);

        console.log("Infor");
        console.log(this.info);
        this.predictData();
      });
  }

  // Refrescar la pagina
  refresh() {
    location.reload();
  }


  // Para dar consejos de predicciones
  protected days = null;

  getPrediction() {
    if (this.days) {
      this.plantsService.getAdvice(this.activatedRoute.snapshot.params.id, this.days)
        .subscribe(resp => {
          this.prediccion = resp;
          console.log(resp);
          // this.prediccion = resp.Valoracion;
        })
    }
    else {
      alertify.alert("Por favor digita un numero");
    }
  }

  // Para mover el menu del consejo de prediccion
  private count = 0;
  togglePar() {
    if (this.count % 2 == 0) {
      //abierto
      this.render.addClass(this.side.nativeElement, 'active');
    }
    else {
      this.clear();
      this.render.removeClass(this.side.nativeElement, 'active');

    }
    this.count++;
  }
  clear() {
    this.days = null;
    this.prediccion = null;
  }




}
